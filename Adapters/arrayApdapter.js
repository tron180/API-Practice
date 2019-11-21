const utils = require("../lib/utils");

class ArrayAdapter {
  constructor() {
    this.array_of_numbers = [];
  }

  // Save
  save(object) {
    return Promise.resolve()
      .then(() => {
        if (object) {
          object.id = utils.IdGen();
          return object;
        }
      })
      .then(object => {
        this.array_of_numbers.push(object);
        return this.array_of_numbers;
      })
      .then(object => {
        return object;
      })
      .catch(err => {
        throw err;
      });
  }

  // Find
  find(object) {
    let found = utils.findingInArray(this.array_of_numbers, object);
    return found;
  }

  // Update
  update(finder_object, changed_data_object) {
    return Promise.resolve()
      .then(() => {
        let resultArr = [];
        let foundObject = utils.findingInArray(
          this.array_of_numbers,
          finder_object
					);					
        foundObject.forEach(item => {
          Object.keys(changed_data_object).forEach(item1 => {
            let index = this.array_of_numbers.findIndex(p => p.id == item.id);
            this.array_of_numbers[index][item1] = changed_data_object[item1];
						resultArr.push(this.array_of_numbers[index]);
          });
        });
        return resultArr;
      })
      .then(updated_object => {
        return updated_object;
      })
      .catch(err => {
        throw err;
      });
  }

  // Delete
  delete(deleting_object) {
    return Promise.resolve()
      .then(() => {
        if (this.array_of_numbers.length != 0) {
          Object.keys(deleting_object).map(item => {
            this.array_of_numbers = this.array_of_numbers.filter(
              element => element[item] != deleting_object[item]
            );
          });
        } else {
          return [];
        }
        return [];
      })
      .then(object => {
        return object;
      })
      .catch(err => {
        throw err;
      });
  }
}

module.exports = ArrayAdapter;
