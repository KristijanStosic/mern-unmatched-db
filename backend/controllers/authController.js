import User from "../models/userModel.js";
import { comparePassword } from "../utils/comparePassword.js";
import { generateToken } from '../utils/generateToken.js'; 

// @desc Auth user & get token
// @route POST /api/auth/login
// @access Public
const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).exec();

    if (!user) {
        res.status(401);
        throw new Error('Invalid email or password');
    }

    const isPasswordCorrect = await comparePassword(password, user.password);

    if (!isPasswordCorrect) {
        res.status(401);
        throw new Error('Invalid email or password');
    }

    generateToken(res, user._id);

    res.status(200).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image
    });
};

// @desc Register user
// @route POST /api/auth/register
// @access Public
const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Find if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(409);
        throw new Error('Invalid email or password');
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
    });

    if (user) {
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
};

// @desc Logout user / clear cookie
// @route POST /api/auth/logout
// @access Private
const logout = (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(Date.now() + 1000),
        // expires: new Date(0),
    });

    res.status(200).json({ message: 'Logged out successfully!' });
};

export { login, register, logout };