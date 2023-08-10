const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,

        },
      
        blogpost_id: {
            references: {
                model: 'blogpost',
                key: 'id',
            }
        },

        user_id: {
            references: {
                model: 'user',
                key: 'id',
            }
        }
    },
    {
        sequelize: true,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
)

module.exports = Comment;
