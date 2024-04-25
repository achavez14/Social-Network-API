const express = require('express');
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const friendRoutes = require('./friend-routes');
const reactionRoutes = require('./reaction-routes');

const app = express();

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/friends', friendRoutes);
app.use('/api/reactions', reactionRoutes);

module.exports = app;
