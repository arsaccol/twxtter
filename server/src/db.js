import mysql from 'mysql'
import Sequelize from 'sequelize';

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}


async function createConnection()
{
    const connectionData = {
        host: process.env.DB_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }

    console.log({connectionData})

    console.log(`DB_HOST: ${process.env.DB_HOST}`)
    try {
        const connection = mysql.createConnection(connectionData)

        await connection.connect()

        connection.on('error', (err) => {
            if(err.code == 'PROTOCOL_CONNECTION_LOST') {
                console.log(`Database error: ${{err}}`)
                setTimeout(10000, createConnection)
            }
        })

        await connection.end()
        console.log('lalala')
    }
    catch(err) {
        console.log({err});
    }
}


function connectSequelize()
{
    const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
        host: dbConfig.host,
        dialect: 'mysql'
    })

    return sequelize
}


export default { createConnection, connectSequelize };