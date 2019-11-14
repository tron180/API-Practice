console.log('Started....');
const ArrayAdapter = require('./arrayApdapter');
const Person = require('./person.js');
const info = require('./database.json');
const MongoAdapter = require('./mongoAdapter');
const FileAdapter = require('./fileAdapter');

let arrayAdapter = new ArrayAdapter();
let mongoAdapter = new MongoAdapter()
let fileAdapter = new FileAdapter()
let p1 = new Person(arrayAdapter)


p1.delete()
	.then(() => {
		return p1.save({ 'name': 'Alice', 'BirthYear': 1995 })
	})
	.then((object) => {
		console.log('Successfully Added..!! ' + JSON.stringify(object));
	}).catch(err => {
		console.log('Something went wrong.', err)
	})

	.then(() => {
		return p1.save({ 'name': 'John', 'BirthYear': 1995 })
	}).catch(err => {
		console.log('Something went wrong.', err)
	})

	.then((object) => {
		console.log('Successfully Added..!! ' + JSON.stringify(object));
		return p1.save({ 'name': 'Clark', 'BirthYear': 1996 })
	}).catch(err => {
		console.log('Something went wrong.', err)
	})

	.then((object) => {
		console.log('Successfully Added..!! ' + JSON.stringify(object));
		return p1.find({ 'age': 24, name: 'John' })
	}).catch(err => {
		console.log('Data Not Found.', err)
	})

	.then((object) => {
		console.log('Successfully Found...!!', JSON.stringify(object))
		return p1.update({ 'name': 'John' }, { 'name': 'Johnathen' })
	}).catch(err => {
		console.log('Data Not Found for Updation.', err)
	})

	.then((object) => {
		console.log('Successfully Updated..!!', JSON.stringify(object))
		return p1.delete({ 'name': 'Alice' })
	}).catch(err => {
		console.log('delete failed', err)
	})

	.then((object) => {
		console.log('Successfully Deleted..!!', JSON.stringify(object))
		return p1.find()
	}).catch(err => {
		console.log('Data Not Found.', err)
	})

	.then((object) => {
		console.log('Successfully Found...!!', JSON.stringify(object))
		return object
	})
