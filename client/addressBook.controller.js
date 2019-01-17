const AddressBook = require('./addressBook.model');

exports.test = function(req, res) {
    res.send('TEST CONTROLLER');
}

exports.add = function(req, res) {
    let entry =  new AddressBook({
        nick: req.body.nick,
        phoneNumber: req.body.phoneNumber
    });

    AddressBook.save(err => {
        if(err) {
            return next(err);
        }

        res.send('Add success');
    });
}