class Person {
	constructor(adapter) {
		this.adapter = adapter;
	};

	save(object) {
		return Promise.resolve()
			.then(() => {
				if (object.name && object.BirthYear) {
					return object
				}
			})
			.then((object) => {
				let age = ageCalcy(object.BirthYear)
				object.age = age;
				return object
			})
			.then((object) => {
				return this.adapter.save(object)
			})
			.catch(() => {
				throw 'Something is missing..!!'
			})
	}

	find(object={}) {
		return new Promise((resolve, reject) => {
			if (object) {
				resolve(this.adapter.find(object));
			} else {
				reject(err)
			}
		})
	}

	update(finder_object, changed_data_object) {
		return new Promise((resolve, reject) => {
			if (finder_object && changed_data_object) {
				resolve(this.adapter.update(finder_object, changed_data_object));
			} else {
				reject(err);
			}
		});
	}

	delete(deleting_object = {}) {
		return new Promise((resolve, reject) => {
			if (deleting_object) {
				resolve(this.adapter.delete(deleting_object));
			} else {
				reject(err);
			}
		});
	}
}

const ageCalcy = (yearOfBirth) => {
	let current_date = new Date();
	let current_year = current_date.getFullYear();
	return current_year - yearOfBirth;
}

module.exports = Person