class ArrayAdapter {
	constructor() {
		this.array_of_numbers = [];
	}

	// Save
	save(object) {
		return new Promise((resolve, reject) => {
			if (Object.keys(object).length > 0) {
				let age = ageCalcy(object['BirthYear']);
				let randomNo = IdGen();
				object.age = age;
				object.id = randomNo;
				this.array_of_numbers.push(object);
				resolve(
					object
				);
			} else {
				reject('Failed to add.');
			}
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
		if (finder_object && changed_data_object) {
			return new Promise((resolve, reject) => {
				this.array_of_numbers.map((item, key) => {
					return Object.keys(finder_object).map(item1 => {
						if (item[item1] == finder_object[item1]) {
							item[item1] = changed_data_object[item1]
							return resolve(this.array_of_numbers[key]);
						}
					})
				});
				reject('Failed');
			})
		}
	};

	// Delete
	delete(deleting_object) {
		return new Promise((resolve, reject) => {
			this.array_of_numbers.map((item, key) => {
				Object.keys(deleting_object).map(item1 => {
					if (item[item1] == deleting_object[item1]) {
						this.array_of_numbers.pop(key)
						return resolve(this.array_of_numbers)
					}
				})
			})
			reject("not deleted");
		})
	};
}

module.exports = ArrayAdapter;

// Id Generator
function IdGen() {
	return Math.random().toString(36).substring(7);
}

// Age Calculator
function ageCalcy(yearOfBirth) {
	let current_date = new Date();
	let current_year = current_date.getFullYear();
	return current_year - yearOfBirth;
}