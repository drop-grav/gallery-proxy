require('newrelic');
const express = require('express');

const app = express();
const port = 3000;
const morgan = require('morgan');

app.use('/listing/:id', express.static('./public'))
app.use(morgan('dev'));

app.get('/api/listing/:listingID', (req, res) => {
  const { listingID } = req.params;
  res.redirect(`http://localhost:3100/api/listing/${listingID}`)
});

app.listen(port, () => console.log(`Listening on port ${port}...`))