const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./addressBook.routes');
const port = 1234;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const dev_db_url = 'mongodb://testUser:qwerty123@ds159634.mlab.com:59634/address_book';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.set('useFindAndModify', false);
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/', routes);

app.listen(port, () => {
    console.log('Server running on port: ' + port);
});
