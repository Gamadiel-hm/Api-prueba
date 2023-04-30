import express from 'express';
// DB
import './db/mongoDb.js';

// routes
import users from './routes/users.js';

const app = express();

// middlewares
app.use((req, res, next) => {
  console.log(req.headers);
  next();
});
app.use(express.json());

app.use('/api/v1', users);

app.listen(3000, () => console.log('Server linten en port 3000'));
