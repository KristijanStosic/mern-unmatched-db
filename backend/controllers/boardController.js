import Board from "../models/boardModel.js";

// @desc    Fetch all boards
// @route   GET /api/boards
// @access  Public
const getBoards = async (req, res) => {
    const boards = await Board.find({});

    if (!boards?.length) {
        res.status(404);
        throw new Error('Boards not found!');
    }

    res.status(200).json(boards);
};

// @desc    Fetch single board
// @route   GET /api/boards/:id
// @access  Public
const getBoardById = async (req, res) => {
    const board = await Board.findById(req.params.id);

    if (!board) {
        res.status(404);
        throw new Error('Board not found');
    }

    return res.status(200).json(board);
};

// @desc    Create new board
// @route   POST /api/boards
// @access  Private
const createBoard = async (req, res) => {
    const { name, boardImage, maxPlayers, numberOfSpaces, numberOfZones, note } = req.body;

    const board = await Board.create({
        boardImage,
        name,
        maxPlayers,
        numberOfSpaces,
        numberOfZones,
        note,
        user: req.user._id
    });

    if (board) {
        const createdBoard = await board.save();
        res.status(201).json(createdBoard);
    } else {
        res.status(400);
        throw new Error('Invalid board data');
    }
};

// @desc    Update board
// @route   PUT /api/boards/:id
// @access  Private/Admin
const updateBoard = async (req, res) => {
    const { name, boardImage, maxPlayers, numberOfSpaces, numberOfZones, note } = req.body;

    const board = await Board.findById(req.params.id);

    if (board) {
        board.boardImage = boardImage || board.boardImage;
        board.name = name || board.name;
        board.maxPlayers = maxPlayers || board.maxPlayers;
        board.numberOfSpaces = numberOfSpaces || board.numberOfSpaces;
        board.numberOfZones = numberOfZones || board.numberOfZones;
        board.note = note || board.note;

        const updatedBoard = await board.save();

        res.status(200).json(updatedBoard);
    } else {
        res.status(404);
        throw new Error('Board not found');
    }
};

// @desc    Delete board
// @route   DELETE /api/boards/:id
// @access  Private/Admin
const deleteBoard = async (req, res) => {
    const board = await Board.findById(req.params.id);

    if (board) {
        await Board.deleteOne({ _id: board._id });
        res.status(200).json({ message: 'Board removed' });
    } else {
        res.status(404);
        throw new Error('Board not found');
    }
};

export { getBoards, getBoardById, createBoard, updateBoard, deleteBoard };