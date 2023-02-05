import { Sequelize } from "sequelize";
import config from "../database";

const sequelize = new Sequelize({
    username: config.development.username,
    password: config.development.password,
    database: config.development.database,
    host: config.development.host,
    dialect: 'postgres',
    // port: config.development.port,
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
        }
    }
})


// const sequelize = new Sequelize({
//     dialect: 'postgres',
//     database: "dvd",
//     host: 'localhost',
//     password: 'face2face',
//     username: 'postgres'
// })

const test = async () => {
    try {
        const result = await sequelize.authenticate();
        console.log('databse connected!')

    } catch (error) {
        console.log(error)
    }
}

export default test;