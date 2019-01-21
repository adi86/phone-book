const AddressBook = require('./addressBook.model');
const mock = require('./mock/addressBook.mock');

exports.test = function (req, res) {
  res.send('TEST CONTROLLER');
}

exports.add = function (req, res) {
  let entry = new AddressBook({
    nick: req.body.nick,
    phoneNumber: req.body.phoneNumber
  });

  entry.save(err => {
    if (err) {
      return next(err);
    }

    res.send('Add success');
  });
}

exports.getAll = function (req, res) {
  AddressBook.find({}).then(function (users) {
    res.send(users);
  });
}

exports.getUser = function (req, res) {
  AddressBook.findById(req.params.id).then(function (user) {
    res.send(user);
  });
}

exports.update = function(req, res) {
  AddressBook.findOneAndUpdate(req.params.id, {$set: req.body}).then(function () {
    res.send('Address book udpated.');
  });
}

exports.delete = function(req, res) {
  AddressBook.findByIdAndRemove(req.params.id).then(function () {
    res.send('Address book deleted.');
  });
}
