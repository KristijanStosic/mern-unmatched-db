import Character from "../models/characterModel.js";

// @desc    Fetch all characters
// @route   GET /api/characters
// @access  Public
const getCharacters = async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.page) || 1;
  const limit = pageSize;
  const skip = (page - 1) * pageSize;

  const keyword = req.query.keyword
    ? {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
    : {};

  let sortOptions = {};

  if (req.query.sort) {
    const sortFields = req.query.sort.split(',').join(' ');
    sortOptions = sortFields;
  } else {
    sortOptions = '-createdAt';
  }

  const selectedNames = req.query.filterBy ? req.query.filterBy.split(',') : [];

  const nameFilters = [];

  if (selectedNames.length > 0) {
    nameFilters.push({ name: { $in: selectedNames } });
  }

  const removeFields = ['keyword', 'limit', 'page', 'sort', 'filterBy'];
  removeFields.forEach((el) => delete req.query[el]);

  const filters = [{ ...keyword }, ...nameFilters, { ...req.query }];

  let queryStr = JSON.stringify({ $and: filters });

  const filteredQuery = JSON.parse(queryStr);

  const count = await Character.countDocuments(filteredQuery);
  const characters = await Character.find(filteredQuery)
    .sort(sortOptions)
    .limit(limit)
    .skip(skip);

  if (!characters?.length) {
    res.status(404);
    throw new Error('Characters not found!');
  }

  res.status(200).json({ characters, page, pages: Math.ceil(count / pageSize) });
};

// @desc    Fetch single character
// @route   GET /api/characters/:id
// @access  Public
const getCharacterById = async (req, res) => {
  const character = await Character.findById(req.params.id);

  if (!character) {
    res.status(404);
    throw new Error('Character not found');
  }

  return res.status(200).json(character);
};

// @desc    Create new character
// @route   POST /api/characters
// @access  Private
const createCharacter = async (req, res) => {
  const { characterImage, name, back, miniatures, description, ability, guides, set, deck, lore, health, attack, movement, sidekick, sidekickMovement, sidekickHealth, sidekickAttack, numberOfSidekicks, numberOfHeroes } = req.body;

  const character = await Character.create({
    characterImage,
    name,
    back,
    miniatures,
    description,
    ability,
    guides,
    set,
    deck,
    lore,
    health,
    attack,
    movement,
    sidekick,
    sidekickMovement,
    sidekickHealth,
    sidekickAttack,
    numberOfSidekicks,
    numberOfHeroes,
    user: req.user._id
  });

  if (character) {
    const createdCharacter = await character.save();
    res.status(201).json(createdCharacter);
  } else {
    res.status(400);
    throw new Error('Invalid character data');
  }
};

// @desc    Update character
// @route   PUT /api/characters/:id
// @access  Private/Admin
const updateCharacter = async (req, res) => {
  const { characterImage, name, back, miniatures, description, ability, guides, set, deck, lore, health, attack, movement, sidekick, sidekickMovement, sidekickHealth, sidekickAttack, numberOfSidekicks, numberOfHeroes } = req.body;

  const character = await Character.findById(req.params.id);

  if (character) {
    character.characterImage = characterImage || character.characterImage;
    character.name = name || character.name;
    character.back = back || character.back;
    character.miniatures = miniatures || character.miniatures;
    character.description = description || character.description;
    character.ability = ability || character.ability;
    character.guides = guides || character.guides;
    character.set = set || character.set;
    character.deck = deck || character.deck;
    character.lore = lore || character.lore;
    character.health = health || character.health;
    character.attack = attack || character.attack;
    character.movement = movement || character.movement;
    character.sidekick = sidekick || character.sidekick;
    character.sidekickMovement = sidekickMovement || character.sidekickMovement;
    character.sidekickHealth = sidekickHealth || character.sidekickHealth;
    character.sidekickAttack = sidekickAttack || character.sidekickAttack;
    character.numberOfSidekicks = numberOfSidekicks || character.numberOfSidekicks;
    character.numberOfHeroes = numberOfHeroes || character.numberOfHeroes;

    const updatedCharacter = await character.save();

    res.status(200).json(updatedCharacter);
  } else {
    res.status(404);
    throw new Error('Character not found');
  }
};

// @desc    Delete character
// @route   DELETE /api/characters/:id
// @access  Private/Admin
const deleteCharacter = async (req, res) => {
  const character = await Character.findById(req.params.id);

  if (character) {
    await Character.deleteOne({ _id: character._id });
    res.status(200).json({ message: 'Character removed' });
  } else {
    res.status(404);
    throw new Error('Character not found');
  }
};

export { getCharacters, getCharacterById, createCharacter, updateCharacter, deleteCharacter };