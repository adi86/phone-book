const AddressBook = require("./addressBook.model");
const mock = require("./mock/addressBook.mock");

exports.test = function(req, res) {
  res.send("TEST CONTROLLER");
};

exports.add = function(req, res) {
  let entry = new AddressBook({
    name: req.body.name,
    surname: req.body.surname,
    phone: req.body.phone,
    email: req.body.email
  });

  entry.save(err => {
    if (err) {
      console.error(err);
      return next(err);
    }

    res.send("Add success");
  });
};

exports.getAll = function(req, res) {
  AddressBook.find({}).then(function(users) {
    res.send(users);
  });
};

exports.getUser = function(req, res) {
  AddressBook.findById(req.params.id).then(function(user) {
    res.send(user);
  });
};

exports.update = function(req, res) {
  AddressBook.findOneAndUpdate(req.params.id, { $set: req.body }).then(
    function() {
      res.send("Address book udpated.");
    }
  );
};

exports.delete = function(req, res) {
  AddressBook.findByIdAndRemove(req.params.id).then(function() {
    res.send("Address book deleted.");
  });
};

exports.saveAll = function(req, res) {
  let entries = mock.addressBooks;

  entries.map(item => {
    return {
      name: item.name,
      phone: item.phone,
      surname: item.surname,
      email: item.email
    }
  });

  AddressBook.create(entries).then(resp => {
    res.send("Added");
  });
};
