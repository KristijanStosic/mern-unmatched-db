import mongoose from 'mongoose';

const boardModel = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        name: {
            type: String,
            required: true,
        },
        boardImage: {
            type: String,
            required: true,
        },
        maxPlayers: {
            type: Number,
            required: true
        },
        numberOfSpaces: {
            type: Number,
            required: true
        },
        numberOfZones: {
            type: Number,
            required: true
        },
        note: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Board = mongoose.model('Board', boardModel);

export default Board;