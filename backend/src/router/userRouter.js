const express = require("express");
const { createUser, getUserByUserID, updateUserByUserId, getAllUserDetails } = require("../controller/userControllers");
const { login, logout } = require("../controller/login");
const { isAuthorised } = require("../util/auth");

const router = express.Router();

// Public route for login
router.post("/login", login);

// Public route for logout
router.get("/logout", logout);

// Only admin and superAdmin can get all user details
router.get('/getUserDetails', isAuthorised("admin", "superAdmin"), getAllUserDetails);

// Admin, superAdmin, and the specific user can view and update user details by userId
router.route('/:userId')
    .get(isAuthorised("admin", "superAdmin", "user"), getUserByUserID)
    .put(isAuthorised("admin", "superAdmin", "user"), updateUserByUserId);

module.exports = router;
