const jwt = require('jsonwebtoken');
const errorHandler = require('./error.js');

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
   console.log(token);
  if (!token) return next(errorHandler(401, 'Unauthorized'));

  jwt.verify("klnkjlnkjnkjnk" ,(err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden'));

    req.user = user;
    next();
  });
};

module.exports = verifyToken;