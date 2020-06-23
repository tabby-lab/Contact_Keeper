const jwt = require('jsonwebtoken');
const config = require('config');
module.exports = function (req, res, next) {
    //get token from the header
    const token = req.header('x-auth-token');




    //check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token authorization denied' });
    }

    //pulling out payload
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'token is not valid ' });
    }
};

//middleware is a func that has access to request and respond cycle or object
