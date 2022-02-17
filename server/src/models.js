import DataTypes from 'sequelize'
import Sequelize from 'sequelize'

async function getDefinitions(sequelize)
{
        const User = sequelize.define(
        'User', {
            isAdmin: {
                type: DataTypes.BOOLEAN,
                default: false
            },

            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        })



        const Post = sequelize.define(
        'Post', {
            postTime: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            content: {
                type: DataTypes.STRING(280),
                allowNull: false
            }
        })

        //Post.belongsTo(User, { foreignKey: {allowNull: false}, onDelete: 'CASCADE' })
        //User.hasMany(Post, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'})
        User.hasMany(Post, {foreignKey: {allowNull: false}})
}


export default { getDefinitions };
