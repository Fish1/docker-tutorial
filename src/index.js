const app = require('express')();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World! Docker is easy!',
  })
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});