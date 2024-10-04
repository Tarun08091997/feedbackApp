const express = require("express");
const { changePassword, deleteUserByUserId } = require("../superadmin/changePassword");
const { getAllUsers, createUser } = require("../controller/userControllers");
const { isAuthorised } = require("../util/auth");

const router = express.Router();

router.route("/updatePassword/:userID").put(isAuthorised("superAdmin"), changePassword);

router.route("/deleteUser/:userId").delete(isAuthorised("superAdmin"), deleteUserByUserId);

router.route("/").get(isAuthorised("admin", "superAdmin"), getAllUsers).post(isAuthorised("admin", "superAdmin"), createUser);

module.exports = router;
