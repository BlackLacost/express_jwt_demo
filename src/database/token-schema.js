require('dotenv').config();
const debug = require('debug')('app:token-schema');
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
const { Schema } = require('mongoose');

const secret = process.env.JWT_SECRET;

const tokenSchema = new Schema({
  userId: { type: String, required: true },
  refreshToken: { type: String, required: true },
});

async function genAccessToken(userId, expiresIn) {
  return jwt.sign({ id: userId }, secret, { expiresIn });
}

async function genRefreshToken() {
  return uuid();
}

tokenSchema.statics.createToken = async function(userId, { expiresIn = '5m' }) {
  const accessToken = await genAccessToken(userId, expiresIn);
  debug(`Created AccessToken ${accessToken}`);
  const refreshToken = await genRefreshToken();
  debug(`Created RefreshToken ${refreshToken}`);
  const token = await this.create({ userId, refreshToken });
  debug(`Add Refresh Token ${token} to db`);
  return {
    token: accessToken,
    refreshToken,
  };
};

module.exports = tokenSchema;
