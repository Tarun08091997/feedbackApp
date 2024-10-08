const express = require("express");
const { changePassword, deleteUserByUserId } = require("../superadmin/changePassword");
const {createUser, getAllUers } = require("../controller/userControllers");
const { isAuthorised } = require("../util/auth");

const router = express.Router();

router.route("/updatePassword/:userID").put(isAuthorised("superAdmin"), changePassword);

router.route("/deleteUser/:userId").delete(isAuthorised("superAdmin"), deleteUserByUserId);

// router.route("/").post(isAuthorised("admin", "superAdmin"), createUser).get(isAuthorised("admin", "superAdmin"), getAllUers);
router.route("/").post(createUser).get(getAllUers);

module.exports = router;
