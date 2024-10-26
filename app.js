// app.js
const express = require('express');
const { specs, swaggerUi } = require('./swagger');
const app = express();
const port = 3000;
const routes = require('./routes')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(routes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});