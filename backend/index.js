import express from 'express';
const app = express();
const PORT = 4174;
app.get('/', (req, res) => {
  res.send('Backend is running');
});
app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});
