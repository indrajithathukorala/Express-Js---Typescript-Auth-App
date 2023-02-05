
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const genarateAccessToken = (usrname: String) => {
    return jwt.sign({usrname}, process.env.TOKEN_SECRET as string, {expiresIn: '1h'} )
}

export default genarateAccessToken;