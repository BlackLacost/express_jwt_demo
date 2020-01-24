require('dotenv').config();
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
const { Schema } = require('mongoose');

const secret = process.env.JWT_SECRET;

const tokenSchema = new Schema({
  userId: { type: String, required: true },
  refreshToken: { type: String, required: true },
});

tokenSchema.statics.genAccessToken = async function(userId, { expiresIn = '5m' }) {
  return jwt.sign({ id: userId }, secret, { expiresIn });
};

tokenSchema.statics.genRefreshToken = async function() {
  return uuid();
};

module.exports = tokenSchema;
