const SuggestionModel = require("../database/model/suggestionSchema");

// Create a new suggestion
exports.createSuggestion = async (req, res) => {
    try {
        const suggestion = new SuggestionModel(req.body);
        await suggestion.save();
        res.status(201).json(suggestion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all suggestions (optional)
exports.getAllSuggestions = async (req, res) => {
    try {
        const suggestions = await SuggestionModel.find();
        res.status(200).json(suggestions);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get suggestions for a specific user
exports.getSuggestionsFromUser = async (req, res) => {
    try {
        const suggestions = await SuggestionModel.find({ from: req.params.userId });
        res.status(200).json(suggestions);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get suggestions for a specific user
exports.getSuggestionsToUser = async (req, res) => {
    try {
        const suggestions = await SuggestionModel.find({ to: req.params.userId });
        res.status(200).json(suggestions);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update response of a suggestion
exports.updateSuggestionResponse = async (req, res) => {
    try {
        const suggestion = await SuggestionModel.findById(req.params.suggestionId);
        if (!suggestion) {
            return res.status(404).json({ message: "Suggestion not found" });
        }

        suggestion.response.push({
            message: req.body.message,
            date: new Date()
        });
        await suggestion.save();

        res.status(200).json(suggestion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a suggestion
exports.deleteSuggestion = async (req, res) => {
    try {
        const suggestion = await SuggestionModel.findByIdAndDelete(req.params.suggestionId);
        if (!suggestion) {
            return res.status(404).json({ message: "Suggestion not found" });
        }

        res.status(200).json({ message: "Suggestion deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};