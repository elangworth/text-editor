const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    //res.sendfile('./main.html'));
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
