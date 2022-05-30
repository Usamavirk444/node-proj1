const db = require('../models')
const User = db.user
const jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
    // get from cookie
    const token = req.cookies.jwt;
    // console.log(token)
    // check if token exists
    if (token) {
        jwt.verify(token, 'tokensecret', (err, decoded) => {
            if (err) {
                console.log(err);
                res.redirect('/auth/login-register');
            } else {
                // console.log(decoded);
                res.locals.id = decoded.id
                next();
            }
        });
    } else
        res.redirect('/auth/login-register');
}
module.exports = auth