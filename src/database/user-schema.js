const { Schema } = require('mongoose');

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.post('save', (error, doc, next) => {
  if (error.name === 'ValidationError') {
    error.status = 400;
    next(error);
  } else {
    next();
  }
});

module.exports = userSchema;
