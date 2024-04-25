const Reaction = require('../models/Reaction');

const reactionController = {
  async getReactions(req, res) {
    try {
      // Get reactions
      const reactions = await Reaction.find();
      res.json(reactions);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createReaction(req, res) {
    try {
      // Create a reaction
      const dbReactionData = await Reaction.create(req.body);
      res.json(dbReactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteReaction(req, res) {
    try {
      // Delete a reaction
      const deletedReaction = await Reaction.findByIdAndDelete(req.params.reactionId);
      if (!deletedReaction) {
        return res.status(404).json({ message: 'No reaction with that ID' });
      }
      res.json({ message: 'Reaction deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = reactionController;