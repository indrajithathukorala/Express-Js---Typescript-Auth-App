import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import testDb from './dataaccess/databaseconfig';



import genarateAccessToken from './types/helper/token';
import authToken from './types/middlware/auth';
import config from './database';

dotenv.config()

const app: Express = express();


console.log(

   {  username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) ,
    dialect: process.env.DB_DIALECT,}
)

// if (process.env.NODE_ENV !== "production") {
//    console.log('not prod')
//    }

testDb();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    console.log('dasda')
})

app.get('/user', authToken, (req: Request, res: Response) => {
    try {
        res.send('hello')

    } catch (error) {
        res.send(error)
    }
})

app.post('/user', (req: Request, res: Response,) => {
    try {
        const token = genarateAccessToken(req.body.name)
        res.send(token)
        console.log(req.body.name)
    } catch (error) {
        res.send(error)
    }
})

app.listen(process.env.PORT, () => {
    console.log('hello server started')
})
