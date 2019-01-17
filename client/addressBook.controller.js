const AddressBook = require('./addressBook.model');
const mock = require('./mock/addressBook.mock');

exports.test = function(req, res) {
    res.send('TEST CONTROLLER');
}

exports.add = function(req, res) {
    // let entry =  new AddressBook({
    //     nick: req.body.nick,
    //     phoneNumber: req.body.phoneNumber
    // });

    // AddressBook.save(err => {
    //     if(err) {
    //         return next(err);
    //     }

    //     res.send('Add success');
    // });    
    mock.addressBooks.push({
        nick: req.body.nick,
        phoneNumber: req.body.phoneNumber 
    });

    res.send(mock);
}

exports.getAll = function(req, res) {
    console.log('GET ALL')
    res.send(mock);
}