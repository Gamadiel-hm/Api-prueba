import { Schema, model } from 'mongoose';

const usersSchema = new Schema({
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});

export const users = model('user', usersSchema);
