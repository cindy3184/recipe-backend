const express = require('express');
const morgan = require('morgan');


const app = express();

require('dotenv').config();
require('./config/database');


app.use(morgan('dev'));
app.use(express.json());

app.use('/api/recipes', require('./routes/api/recipes'));

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`express is listening for AJAX requests on port ${port}`)
}); 