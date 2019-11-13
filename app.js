console.log('Started....');
const ArrayAdapter = require('./arrayApdapter');
const Person = require('./person.js');
const info = require('./database.json');
const MongoAdapter = require('./mongoAdapter');
const FileAdapter = require('./fileAdapter');

var arrayAdapter = new ArrayAdapter();
var mongoAdapter = new MongoAdapter()
var fileAdapter = new FileAdapter()
var p1 = new Person(arrayAdapter)


p1.delete()
	.then(() => {
		return p1.save({ 'name': 'Alice', 'BirthYear': 1996 })
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
		return p1.find({ 'name': 'Alice' })
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
		return p1.delete({ 'name': 'Alice', 'name': 'Johnathen', 'name': 'John' })
	}).catch(err => {
		console.log('delete failed', err)
	})

	.then((object) => {
		console.log('Successfully Deleted..!!', JSON.stringify(object))
	}).catch(err => {
		console.log('Data Not Found.')
	})
