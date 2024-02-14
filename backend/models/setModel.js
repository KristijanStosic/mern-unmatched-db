import mongoose from 'mongoose';

const setModel = mongoose.Schema(
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
        url: {
            type: String,
            required: true
        },
        decks: {
            type: [String],
            required: true,
        },
        boards: {
            type: [mongoose.Schema.Types.ObjectId],
            required: true,
            ref: 'Board'
        },
        releaseDate: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Set = mongoose.model('Set', setModel);

export default Set;