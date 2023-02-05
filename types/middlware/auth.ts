import { Request,Response, NextFunction, } from 'express'
import jwt from 'jsonwebtoken';
import {config } from 'dotenv';

config();



// dotenv.config()

const authToken = (req: Request, res:Response, next: NextFunction) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(typeof token)
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET as string, (err : any, user: any ) => {
      console.log(`error is ${err}`)
  
      if (err) return res.sendStatus(403)
  
    //   req.body.user = user
  
      next()
    })
}

export default authToken;