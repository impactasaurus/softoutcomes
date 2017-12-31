const express = require('express');
const app = express();
const helmet = require('helmet');

const pkg = require('../package');
const port = process.env.PORT || (pkg.config && pkg.config.port) || 3000;

app.use(helmet());
app.use(express.static('public'));
app.use('/api', express.static('public/data'));

const fileOptions = {
  root: __dirname
};

app.get('/', (req, res) => res.sendFile('index.html', fileOptions));
app.get('/catalogue', (req, res) => res.sendFile('search.html', fileOptions));

app.listen(port, () => console.log(`App listening on port ${port}`));
