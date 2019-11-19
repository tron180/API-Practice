class Person {
  constructor(adapter) {
    this.adapter = adapter;
  }

  save(object) {
    return Promise.resolve()
      .then(() => {
        if (object.name && object.birth_year) {
          return object;
        }
      })
      .then(object => {
        let age = ageCalcy(object.birth_year);
        object.age = age;
        return object;
      })
      .then(object => {
        return this.adapter.save(object);
      })
      .catch(err => {
        throw ("Something is missing..!!", err);
      });
  }

  find(object = {}) {
    return Promise.resolve()
      .then(() => {
        if (object) {
          return object;
        }
      })
      .then(object => {
        return this.adapter.find(object);
      })
      .catch(() => {
        throw "Enter something to search.";
      });
  }

  update(finder_object, changed_data_object) {
    return Promise.resolve()
      .then(() => {
        if (finder_object && changed_data_object) {
          return {};
        } else {
          throw {};
        }
      })
      .then(() => {
        return this.adapter.update(finder_object, changed_data_object);
      })
      .catch(() => {
        throw "Enter something to Search or Alternative data.";
      });
  }

  delete(deleting_object = {}) {
    return Promise.resolve()
      .then(() => {
        if (deleting_object) {
          return deleting_object;
        }
      })
      .then(deleting_object => {
        return this.adapter.delete(deleting_object);
      })
      .catch(() => {
        throw "Enter the deleting element";
      });
  }
}

const ageCalcy = yearOfBirth => {
  let current_date = new Date();
  let current_year = current_date.getFullYear();
  return current_year - yearOfBirth;
};

module.exports = Person;
