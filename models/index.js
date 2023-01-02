const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Income, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});





module.exports = { User,  };