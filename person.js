class Person {
	constructor(adapter) {
		this.adapter = adapter;
	};

	save(object) {
		return new Promise((resolve, reject) => {
			if (object.name && object.BirthYear) {
				resolve(this.adapter.save(object))
			} else {
				reject('Something is missing')
			}
		})
	}

	find(object) {
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

	delete(deleting_object) {
		return new Promise((resolve, reject) => {
			if (deleting_object) {
				resolve(this.adapter.delete(deleting_object));
			} else {
				reject(err);
			}
		});
	}
}

module.exports = Person