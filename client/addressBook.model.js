const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddressBookSchema = new Schema({    
    nick: {type: String, required: true},
    phoneNumber: {type: String, required: true}
});

module.exports = mongoose.model('AddressBook', AddressBookSchema);