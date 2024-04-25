const Friend = require('../models/Friend');

const friendController = {
  async getFriends(req, res) {
    try {
      const friends = await Friend.find();
      res.json(friends);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const dbFriendData = await Friend.create(req.body);
      res.json(dbFriendData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeFriend(req, res) {
    try {
      const removedFriend = await Friend.findByIdAndDelete(req.params.friendId);
      if (!removedFriend) {
        return res.status(404).json({ message: 'No friend with that ID' });
      }
      res.json({ message: 'Friend removed successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = friendController;