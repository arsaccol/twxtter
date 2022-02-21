import { DataTypes, Sequelize } from 'sequelize'
import { dbConfig } from './dbconfig.js'


const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql'
})



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


export default { User, Post };
