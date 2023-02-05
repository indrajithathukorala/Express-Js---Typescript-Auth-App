const jwt  = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

module.exports  =  function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(typeof token)
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET , (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }