const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}

export { dbConfig }