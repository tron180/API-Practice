const utils = require('./lib/utils');

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
				}
			})
			.then(() => {
				return this.array_of_numbers.push(object);
			})
			.then(object => {
				return object;
			})
			.catch(err => {
				throw err;
			})
	};


	// Find
	find(object) {
		if (object) {
			return new Promise((resolve, reject) => {
				Object.keys(object).map((key) => {
					for (let i = 0; i <= this.array_of_numbers.length; i++) { // loop for array of object
						for (let j = 0; j <= Object.keys(object).length; j++) { // loop for particular object keys
							if (key === Object.keys(this.array_of_numbers[i])[j]) {
								if (this.array_of_numbers[i][key] == object[key]) {
									return resolve(this.array_of_numbers[i]);
								}
							}
						}
					}
					reject('Failed');
				})
			})
		}
	};

	// Update
	update(finder_object, changed_data_object) {
		return Promise.resolve()
			.then(() => {
				if (finder_object && changed_data_object) {
					this.array_of_numbers.map((item, key) => {
						return Object.keys(finder_object).map(item1 => {
							if (item[item1] == finder_object[item1]) {
								item[item1] = changed_data_object[item1]
								return this.array_of_numbers[key];
							}
						})
					});
					reject('Failed');
				}
			})
			.then((array) => {
				return array
			})
			.catch((err) => {
				throw err
			})
	};

	// Delete
	delete(deleting_object) {
		return Promise.resolve()
			.then(() => {
				if(this.array_of_numbers.length != 0){
					
				}
			});
			// 	if (this.array_of_numbers.length > 0) {
			// 		this.array_of_numbers.map((item, key) => {
			// 			Object.keys(deleting_object).map(item1 => {
			// 				if (item[item1] == deleting_object[item1]) {
			// 					this.array_of_numbers.pop(key)
			// 					return this.array_of_numbers
			// 				}
			// 			})
			// 		})
			// 	} else {
			// 		return this.array_of_numbers
			// 	}
			// })
			// .catch(() => {
			// 	throw err
			// })
	};
}

module.exports = ArrayAdapter;


