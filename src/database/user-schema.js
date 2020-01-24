const { Schema } = require('mongoose');

const userSchema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.statics.authentication = async function(login, password) {
  const user = await this.findOne({ login });
  if (!user || user.password !== password) {
    const err = new Error('Credentials error');
    err.status = 403;
    throw err;
  }
  return user;
};

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
