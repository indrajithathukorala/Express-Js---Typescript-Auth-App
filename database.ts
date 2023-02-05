import dotnev from 'dotenv';
dotnev.config();


const config = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD ,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) ,
        dialect: process.env.DB_DIALECT,
    },
    // test: {
    //     username: ,
    //     password: PG_PASSWORD,
    //     database: 'sample_db',
    //     host: PG_HOST,
    //     port: PG_PORT,
    //     dialect: 'postgres',
    // },
    // production: {
    //     username: ,
    //     password: PG_PASSWORD,
    //     database: 'sample_db',
    //     host: PG_HOST,
    //     port: PG_PORT,
    //     dialect: 'postgres',
    // },
};

export default config;