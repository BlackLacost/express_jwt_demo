const { Schema } = require('mongoose');

const userSchema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.post('save', (error, doc, next) => {
  if (error.name === 'ValidationError') {
    error.status = 400;
    next(error);
  } else if (
    error.name === 'MongoError' &&
    error.code === 11000 &&
    error.keyValue.hasOwnProperty('login')
  ) {
    const err = new Error('Existing Login');
    err.status = 403;
    next(err);
  } else {
    next();
  }
});

module.exports = userSchema;
