import express from 'express';

const users = express.Router();

users
  .get('/user', (req, res) => {
    res.json({ login: true });
  })
  .post('/user', (req, res) => {
    console.log(req.body);
    res.json({ create: true });
  })
  .put('/user', (req, res) => {
    res.json({ update: true });
  })
  .delete('/user', (req, res) => {
    res.json({ delete: true });
  });

export default users;
