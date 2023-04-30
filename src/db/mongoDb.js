import mongoose from 'mongoose';

const dbconnect = mongoose
  .connect('mongodb://127.0.0.1:27017/users')
  .then(() => console.log('connect'))
  .catch(() => console.log('Error connect db'));

export default dbconnect;
