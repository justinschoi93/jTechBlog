const Blogpost = require('./Blogpost')
const User = require('./User');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
    foreignKey: 'user_id',
});

Blogpost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Blogpost, {
    foreignKey: 'blogpost_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Blogpost, Comment };