const UserModel = require("../database/model/userSchema")

exports.changePassword = async (req, res, next) => {
    try {
        const userid = req.params.userID;

        const user = await UserModel.findOne({ "userId": userid }).select("+password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Change the password
        user.password = "ctu@123";

        // Save the user (this will trigger the pre-save hook)
        await user.save();

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Delete user by UserID
exports.deleteUserByUserId = async (req, res, next) => {
    try {
        const user = await UserModel.findOneAndDelete({ userId: req.params.userId });
        if (!user) {
            return res.status(404).json({success: false, message: "User not found" });
        }
        res.json({success: true, message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: err.message 
        });
    }
};