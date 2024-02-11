import User from "../models/userModel.js";
import Character from "../models/characterModel.js";
import MyFavoriteCharacter from "../models/myFavoriteCharacterModel.js";

// @desc My Favorites Characters
// @route POST /api/my-favorite-characters
// @access Private
const getMyFavoriteCharacters = async (req, res) => {
    const userId = req.user._id;

    if (!userId) {
        res.status(404);
        throw new Error('User not found');
    }

    const myFavoriteCharacters = await MyFavoriteCharacter.findOne({ user: userId }).populate('characters');

    if (!myFavoriteCharacters?.length) {
        res.status(404);
        throw new Error('My favorite characters list not found for given user');
    }

    const favoriteCharacters = myFavoriteCharacters.characters;

    res.status(200).json(favoriteCharacters);
};

// @desc Add To favorite characaters
// @route POST /api/add-to-favorites/:characterId
// @access Public
const addToFavorites = async (req, res) => {
    const characterId = req.params.characterId;

    const user = await User.findById(req.user._id);
    const character = await Character.findById(characterId);

    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    if (!character) {
        res.status(401);
        throw new Error('Character not found');
    }

    let myFavoriteCharacters = await MyFavoriteCharacter.findOne({ user });

    if (!myFavoriteCharacters) {
        myFavoriteCharacters = new MyFavoriteCharacter({
            user: req.user._id,
            characters: [],
        });
    }

    if (myFavoriteCharacters.characters.includes(characterId)) {
        res.status(401);
        throw new Error('Character is already in favorites list');
    }

    myFavoriteCharacters.characters.push(req.params.characterId);

    await myFavoriteCharacters.save();
    res.status(200).json({ message: 'Character added to my favourites' });
};

// @desc Remove From Favorites
// @route DELETE /api/remove-from-favorites/:characterId
// @access Public
const removeFromFavorites = async (req, res) => {
    const userId = req.user._id;
    const characterId = req.params.characterId;

    const myFavoriteCharacters = await MyFavoriteCharacter.findOne({ user: userId });

    if (!myFavoriteCharacters?.length) {
        res.status(404);
        throw new Error('My favorite characters list not found for given user');
    }

    if (!myFavoriteCharacters.characters.includes(characterId)) {
        res.status(400);
        throw new Error('Character not found in my favorites characters list');
    }

    myFavoriteCharacters.characters = myFavoriteCharacters.characters.filter(charId => charId.toString() !== characterId);

    await myFavoriteCharacters.save();
    res.status(200).json({ message: 'Character removed from my favorites' });
};

export { addToFavorites, removeFromFavorites, getMyFavoriteCharacters };