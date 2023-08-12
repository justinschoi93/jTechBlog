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

        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
      
        blogpost_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
            references: {
                model: 'blogpost',
                key: 'id',
            }
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,

            references: {
                model: 'user',
                key: 'username',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
)

module.exports = Comment;
