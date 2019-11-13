const mongoose = require('mongoose');
const utils = require('./lib/utils');

mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

var Person = mongoose.model('Person', new mongoose.Schema({
	id: String,
	name: String,
	BirthYear: Number,
	age: Number,
}));

class MongoAdapter {
	constructor() { }

	// Save
	save(object) {
		return Promise.resolve()
			.then(() => {
				if (object) {
					const id = { 'id': utils.IdGen() };
					object = { ...id, ...object };
					return object
				}
			})
			.then((object) => {
				return Person(object).save()
			})
			.then((object) => {
				return object
			})
			.catch(err => {
				throw err
			})
	}

	// Find
	find(object) {
		return Promise.resolve()
			.then(() => {
				if (object) {
					return Person.find(object)
				}
			})
			.then(object => {
				return object
			})
			.catch(err => {
				throw err;
			})
	}

	// Update
	update(finder_object, changed_data_object) {
		return Promise.resolve()
			.then(() => {
				return Person.updateMany(finder_object, changed_data_object)
			})
			.then(() => {
				return Person.find(changed_data_object)
			})
			.catch(err => {
				throw err;
			})
	}

	// Delete
	delete(deleting_object = {}) {
		return Promise.resolve()
			.then(() => {
				return Person.deleteMany(deleting_object)
			})
			.then(() => {
				return Person.find(deleting_object)
			})
			.catch(err => {
				throw err;
			})
	}

}

module.exports = MongoAdapter;
