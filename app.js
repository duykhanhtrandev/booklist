const express = require('express');
const app = express();

app.use(express.static('./public'));

app.listen(
  5000,
  console.log(`Server is listening on port: http://localhost:5000`)
);
