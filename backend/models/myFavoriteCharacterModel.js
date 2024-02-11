import mongoose from 'mongoose';

const myFavoriteCharacterSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
            required: true,
        },
        characters: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Character',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const MyFavoriteCharacter = mongoose.model('MyFavoriteCharacter', myFavoriteCharacterSchema);

export default MyFavoriteCharacter;