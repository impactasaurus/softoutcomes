const express = require('express');
const app = express();
const helmet = require('helmet');

const pkg = require('./package');
const port = process.env.PORT || (pkg.config && pkg.config.port) || 4000;

app.use(helmet());
app.use(express.static('public'));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
} 
app.use('/api', express.static('public/data'));

const fileOptions = {
  root: __dirname
};

if (process.env.NODE_ENV === 'production') {
  // In local dev, the devserver handles these requests and so we don't need to.
  app.get('/*', (req, res) => res.sendFile('build/index.html', fileOptions));
}

app.listen(port, () => console.log(`App listening on port ${port}`));
