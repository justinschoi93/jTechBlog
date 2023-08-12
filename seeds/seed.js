const sequelize = require('../config/connections');
const { Blogpost, Comment, User } = require('../models');
const blogpostData = require('./blogpostData')
const commentData = require('./commentData');
const userData = require('./userData');


const seedDataBase = async () => {

    await sequelize.sync({force: true});

    const user = await User.bulkCreate(userData);
    const blogposts = await Blogpost.bulkCreate(blogpostData);
    const comments = await Comment.bulkCreate(commentData);

    process.exit(0);
}

seedDataBase();