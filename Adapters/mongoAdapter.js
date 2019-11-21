const mongoose = require("mongoose");
const utils = require("../lib/utils");
const Model = require('../mongoModels');

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

class MongoAdapter {
  constructor() { }

  // Save
  save(object, modelUsed) {
    console.log('Hi from mongo');
    return Promise.resolve()
      .then(() => {
        if (object) {
          const id = { id: utils.IdGen() };
          object = { ...id, ...object };
          return object;
        }
      })
      .then(object => {
        return Model[modelUsed](object).save();
      })
      .then(object => {
        return object;
      })
      .catch(err => {
        throw err;
      });
  }

  // Find
  find(object, modelUsed) {
    return Promise.resolve()
      .then(() => {
        if (object) {
          return Model[modelUsed].find(object);
        }
      })
      .then(object => {
        return object;
      })
      .catch(err => {
        throw err;
      });
  }

  // Update
  update(finder_object, changed_data_object, modelUsed) {
    return Promise.resolve()
      .then(() => {
        return Model[modelUsed].updateMany(finder_object, changed_data_object);
      })
      .then(() => {
        return Model[modelUsed].find(changed_data_object);
      })
      .catch(err => {
        throw err;
      });
  }

  // Delete
  delete(deleting_object = {}, modelUsed) {
    return Promise.resolve()
      .then(() => {
        return Model[modelUsed].deleteMany(deleting_object);
      })
      .then(() => {
        return Model[modelUsed].find(deleting_object);
      })
      .catch(err => {
        throw err;
      });
  }
}

module.exports = MongoAdapter;
