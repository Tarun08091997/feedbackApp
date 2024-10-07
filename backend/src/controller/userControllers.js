const mongo = require("mongoose");
const UserModel = require('../database/model/userSchema');
const { sendCookie } = require("../util/jwt");

// Create a user
exports.createUser = async (req, res, next) => {
    try {
        const data = req.body;
        const user = await UserModel.create(data);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Could not create User"
            });
        }
        await sendCookie(user , res);
        
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: err.message 
        });
    }
};


// Get User names
exports.getAllUserDetails = async (req, res, next) => {
    try {
        const users = await UserModel.find({}, { name: 1 , userId:1 , university:1 , school:1 , department:1, _id: 0 });
        const userNames = users.map(user => user.name);
        res.json(userNames);
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: err.message 
        });
    }
};



exports.getAllUers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: err.message 
        });
    }
};

// Get user by UserID
exports.getUserByUserID = async (req, res, next) => {
    try {
        const user = await UserModel.findOne({ userId: req.params.userId });
        if (!user) {
            return res.status(404).json({ success: false , message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: err.message 
        });
    }
};

// Update user by UserID
exports.updateUserByUserId = async (req, res, next) => {
    try {
        const user = await UserModel.findOneAndUpdate(
            { userId: req.params.userId },
            req.body,
            { new: true, runValidators: true }
        );
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: err.message 
        });
    }
};