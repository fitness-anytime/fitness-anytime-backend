const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET;

    if(token) {
        jwt.verify(token, secret, (err, decodedtoken) => {
            if(err) {
                next({ status: 401, message: 'Unauthorized Token' });
            } else {
                req.user = decodedtoken;
                next();
            }
        })
    } else {
        next({ status: 401, message: 'Not Authorized' });
    }
}