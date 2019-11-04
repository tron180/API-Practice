console.log('Started....');
let adapter = require('./arrayApdapter');
let Person = require('./person.js')

var pT1 = new adapter();
var p1 = new Person(pT1)


p1.save({ 'name': 'Alice', 'BirthYear': 1996 })
	.then((object) => {
		console.log('Successfully added..!! ' + JSON.stringify(object));
	}).catch(err => {
		console.log('Something went wrong.', err)
	})

	.then(() => {
		return p1.save({ 'name': 'John', 'BirthYear': 1995 })
	}).catch(err => {
		console.log('Something went wrong.', err)
	})

	.then((object) => {
		console.log('Successfully added..!! ' + JSON.stringify(object));
		return p1.find({ 'name': 'John' })
	}).catch(err => {
		console.log('Data Not Found.', err)
	})

	.then((object) => {
		console.log('Successfully Found...!!', JSON.stringify(object))
		return p1.update({ 'age': 24 }, { 'age': 63 })
	}).catch(err => {
		console.log('Data Not Found for Updation.')
	})

	.then((object) => {
		console.log('Successfully Updated..!!', JSON.stringify(object))
		return p1.delete({ 'age': 63 })
	}).catch(err => {
		console.log('delete failed', err)
	})

	.then((object) => {
		console.log('Successfully Deleted..!!', JSON.stringify(object))
	}).catch(err => {
		console.log('Data Not Found.')
	})
