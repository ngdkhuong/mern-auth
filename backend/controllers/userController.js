import asyncHandler from "express-async-handler";
import User from '../models/User.js';
import generateToken from "../utils/generateToken.js";
import bcrypt  from 'bcryptjs';

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res)=> {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return notFound(user);
    }
    
    const isValid = await user.matchPassword(password);

    if (!isValid) {
        return res.status(401).json("Wrong password");
    } else {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res)=> {
    const {name, email, password} = req.body;

    const userExits = await User.findOne({ email });

    if (userExits) {
        res.status(400);
        throw new Error("User already exists");
    } 

    const user = await User.create(
        {
            name,
            email,
            password,
        }
    );
    generateToken(res, user._id);

    if (user) {    
        res.status(201).json(
            {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        )
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

})

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
    res.send("logout user");
}

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res)=> {
    res.send("get profile");
})

// @desc    Update user profile
// @route   GET /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) =>{
    res.send("update profile");
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };