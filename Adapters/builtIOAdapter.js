let Built = require("built.io");
let ClassUsed = Built.App("bltaa628f580f31b6ae");
const utils = require("../lib/utils");

class BuiltAdapter {
  constructor() {}

  // Save
  save(object, class_used) {
    return Promise.resolve()
      .then(() => {
        if (object) {
          const id = { unique_id: utils.IdGen() };
          object = { ...id, ...object };
          return object;
        }
      })
      .then(object => {
        return ClassUsed.Class(class_used)
          .Object()
          .assign(object)
          .save();
      })
      .then(something => {
        // console.log(something.toJSON())
        return object;
      })
      .catch(err => {
        return err;
      });
  }

  // Find
  find(object, class_used) {
    return Promise.resolve()
      .then(() => {
        if (object) {
          return object;
        }
      })
      .then(object => {
        return ClassUsed.Class(class_used)
          .Query()
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
  update(finder_object, changed_data_object, class_used) {
    return Promise.resolve()
      .then(() => {
        if (finder_object) {
          return finder_object;
        }
      })
      .then(finder_object => {
        return ClassUsed.Class(class_used)
          .Query()
          .where(finder_object)
          .exec();
      })
      .then(object => {
        return object.map(item => {
          return item.toJSON().uid;
        });
      })
      .then(uids => {
        return uids.map(item => {
          // for (let [key, value] of Object.entries(changed_data_object)) {
          return ClassUsed.Class(class_used)
            .Object(item)
            .assign(changed_data_object)
            .save()
          // }
        });
      })
      .catch(err => {
        throw err;
      });
  }

  // Delete
  delete(object, class_used) {
    return Promise.resolve()
      .then(() => {
        if (object) {
          return object;
        }
      })
      .then(object => {
        return ClassUsed.Class(class_used)
          .Query()
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
          return ClassUsed.Class(class_used)
            .Object(item)
            .delete();
        });
      })
      .catch(err => {
        throw err;
      });
  }
}

module.exports = BuiltAdapter;
