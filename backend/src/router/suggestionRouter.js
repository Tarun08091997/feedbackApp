
const express = require("express");
const { getAllSuggestions, createSuggestion, getSuggestionsFromUser, deleteSuggestion, updateSuggestionResponse } = require("../controller/suggestionControllers");
const { isAuthorised } = require("../util/auth");

const router = express.Router();

router.route('/getAll').get(isAuthorised("admin","superAdmin"), getAllSuggestions);

router.route('/:userID').post(createSuggestion).get(getSuggestionsFromUser).delete(deleteSuggestion);

module.exports = router;