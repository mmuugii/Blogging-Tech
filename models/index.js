const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const { Model } = require('sequelize');
const { default: ModelManager } = require('sequelize/types/model-manager');

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

User.hasMany(Comment, {
    foreignKey: `post_id`,
});

Comment.belongsTo(User, {
    foreignKey: `post_id`,
});

module.exports = { User, Post, Comment };





module.exports = { User,  };