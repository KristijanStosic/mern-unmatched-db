import Set from "../models/setModel.js";

// @desc    Fetch all sets
// @route   GET /api/sets
// @access  Public
const getSets = async (req, res) => {
    const sets = await Set.find({}).populate('boards');

    if (!sets?.length) {
        res.status(404);
        throw new Error('Sets not found!');
    }

    res.status(200).json(sets);
};

// @desc    Fetch single set
// @route   GET /api/sets/:id
// @access  Public
const getSetById = async (req, res) => {
    const set = await Set.findById(req.params.id);

    if (!set) {
        res.status(404);
        throw new Error('Set not found');
    }

    return res.status(200).json(set);
};

// @desc    Create new set
// @route   POST /api/sets
// @access  Private
const createSet = async (req, res) => {
    const { name, url, decks, boards, releaseDate } = req.body;

    const set = await Set.create({
        name,
        url,
        decks,
        boards,
        releaseDate,
        user: req.user._id
    });

    if (set) {
        const createdSet = await set.save();
        res.status(201).json(createdSet);
    } else {
        res.status(400);
        throw new Error('Invalid set data');
    }
};

// @desc    Update set
// @route   PUT /api/sets/:id
// @access  Private/Admin
const updateSet = async (req, res) => {
    const { name, url, decks, boards, releaseDate } = req.body;

    const set = await Set.findById(req.params.id);

    if (set) {
        set.url = url || set.url;
        set.name = name || set.name;
        set.decks = decks || set.decks;
        set.boards = boards || set.boards;
        set.releaseDate = releaseDate || set.releaseDate;

        const updatedSet = await set.save();

        res.status(200).json(updatedSet);
    } else {
        res.status(404);
        throw new Error('Set not found');
    }
};

// @desc    Delete set
// @route   DELETE /api/sets/:id
// @access  Private/Admin
const deleteSet = async (req, res) => {
    const set = await Set.findById(req.params.id);

    if (set) {
        await Set.deleteOne({ _id: set._id });
        res.status(200).json({ message: 'Set removed' });
    } else {
        res.status(404);
        throw new Error('Set not found');
    }
};

export { getSets, getSetById, createSet, updateSet, deleteSet };