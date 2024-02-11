import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    characterImage: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    },
    miniatures: [
        {
            image1: {
                type: String,
            },
            image2: {
                type: String,
            },
            image3: {
                type: String,
            },
        }
    ],
    description: {
        type: String,
        required: true
    },
    ability: {
        type: String,
        required: true
    },
    guides: [
        {
            name: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    set: {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    deck: {
        type: String,
        required: true
    },
    lore: {
        type: String,
        required: true
    },
    health: {
        type: Number,
        required: true
    },
    attack: {
        type: String,
        required: true,
        enum: ['Ranged', 'Melee']
    },
    movement: {
        type: Number,
        required: true
    },
    sidekick: {
        type: String,
    },
    sidekickMovement: {
        type: Number,
    },
    sidekickHealth: {
        type: Number,
    },
    sidekickAttack: {
        type: String,
        enum: ["Ranged", "Melee"]
    },
    numberOfSidekicks: {
        type: Number,
    },
    numberOfHeroes: {
        type: Number
    }
},
    {
        timestamps: true
    });

const Character = mongoose.model('Character', characterSchema);

export default Character;