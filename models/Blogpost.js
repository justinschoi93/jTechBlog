const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Blogpost extends Model {};

Blogpost.init(
    
    {
        //define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },

        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },


        username: {
            type: DataTypes.STRING,

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
        modelName: 'blogpost',
    }
)

module.exports = Blogpost;