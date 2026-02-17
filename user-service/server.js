const express = require('express');
const app = express();

app.get('/user', (req, res) => {
  res.json({ id: 1, name: "Naresh DevOps User" });
});

app.listen(4000, () => {
  console.log("User Service running on port 4000");
});
