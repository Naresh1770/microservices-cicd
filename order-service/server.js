const express = require('express');
const axios = require('axios');
const app = express();

app.get('/order', async (req, res) => {
  try {
    const user = await axios.get('http://user-service:4000/user');
    res.json({
      orderId: 101,
      product: "Laptop",
      user: user.data
    });
  } catch (error) {
    res.status(500).send("Error connecting to User Service");
  }
});

app.listen(5000, () => {
  console.log("Order Service running on port 5000");
});
