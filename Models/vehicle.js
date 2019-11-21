class Vehicle {
  constructor(adapter, class_used) {
		this.adapter = adapter;
		this.class_used = 'vehicle';
  }

  save(object) {
    return Promise.resolve()
      .then(() => {
        if (object.name && object.company_name) {
          return object;
        }
      })
      .then(object => {
        return this.adapter.save(object, this.class_used);
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
        return this.adapter.find(object, this.class_used);
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
        return this.adapter.update(finder_object, changed_data_object, this.class_used);
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
        return this.adapter.delete(deleting_object, this.class_used);
      })
      .catch(() => {
        throw "Enter the deleting element";
      });
  }
}

module.exports = Vehicle;
