const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');

const userData = require('./userData.json');
const commentsData = require('./commentsData.json');
const postsData = require('./postsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Comment.bulkCreate(commentsData, {
    individualHooks: true,
    returning: true,
  });
  await Post.bulkCreate(postsData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();