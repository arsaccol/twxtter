import DataTypes from 'sequelize'

async function getDefinitions(sequelize)
{
    const models = [
        sequelize.define('User', {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }),


        sequelize.define('Post', {
            postDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        })
    ]

    return models
}


export default { getDefinitions };