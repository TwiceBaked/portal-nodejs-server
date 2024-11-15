const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Azure!');
});

app.get('/hello', (req, res) => {
  res.send('Hello, Azure! This static react site and the Nodejs server this message is being pulled from were created using the Azure portal');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
