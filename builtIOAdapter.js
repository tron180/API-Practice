let Built = require("built.io");
let Person = Built.App("bltaa628f580f31b6ae").Class("person");
const utils = require("./lib/utils");

// var Person = mongoose.model('Person', new mongoose.Schema({
// 	id: String,
// 	name: String,
// 	BirthYear: Number,
// 	age: Number,
// }));

class BuiltAdapter {
  constructor() {}

  // Save
  save(object) {
    return Promise.resolve()
      .then(() => {
        if (object) {
          const id = { unique_id: utils.IdGen() };
          object = { ...id, ...object };
          return object;
        }
      })
      .then(object => {
        return Person.Object()
          .assign(object)
          .save();
      })
      .then(() => {
        return object;
      })
      .catch(err => {
        return err;
      });
  }

  // Find
  find(object) {
    return Promise.resolve()
      .then(() => {
        if (object) {
          return object;
        }
      })
      .then(object => {
        return Person.Query()
          .where(object)
          .exec();
      })
      .then(object => {
        return object.map(item => {
          return item.toJSON();
        });
      })
      .catch(err => {
        throw err;
      });
  }

  // Update
  update(finder_object, changed_data_object) {
    return Promise.resolve()
      .then(() => {
        if (finder_object) {
          return finder_object;
        }
      })
      .then(finder_object => {
        return Person.Query()
          .where(finder_object)
          .exec();
      })
      .then(object => {
        return object.map(item => {
          return item.toJSON().uid;
        });
      })
      .then(uid => {
        return uid.map(item => {
          for (let [key, value] of Object.entries(changed_data_object)) {
            return Person.Object(item)
              .set(key, value)
              .save();
          }
        });
      })
      .catch(err => {
        throw err;
      });
  }

  // Delete
  delete(object) {
    return Promise.resolve()
      .then(() => {
        if (object) {
          return object;
        }
      })
      .then(object => {
        return Person.Query()
          .where(object)
          .exec();
      })
      .then(object => {
        return object.map(item => {
          return item.toJSON().uid;
        });
      })
      .then(uid => {
        return uid.map(item => {
          return Person.Object(item).delete();
        });
      })
      .catch(err => {
        throw err;
      });
  }
}

module.exports = BuiltAdapter;
