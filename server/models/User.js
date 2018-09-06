import mongoose, { Schema } from 'mongoose';

const { Scheme } = mongoose;

const mongoSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  googleToken: {
    access_token: String,
    refresh_token: String,
    token_type: String,
    expiry_date: Number,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  displayName: String,
  avatarUrl: String,
  facebookAccessToken: {
    access_token: String,
    expiry_date: Date,
    reauth_required_in: Date,
  },
  facebookProfile: {
    type: Object,
  },
  facebookID: {
    type: String,
    required: true,
    unique: true,
  },
});
