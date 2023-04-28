import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ ok: 200 });
});

app.listen(3000, () => console.log('Server linten en port 3000'));
