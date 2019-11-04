console.log('Started....');
let adapter = require('./arrayApdapter');

var p1 = adapter.ArrayAdapter({"id": 4, "age": 47});


p1.save({ "id": 5, "age": 39 })
	.then((object) => {
		console.log('Successfully added..!! ' + JSON.stringify(object));
	}).catch(err => {
		console.log('Something went wrong.', err)
	})

	.then(() => {
		return p1.save({ "id": 5, "age": 36 })
	}).catch(err => {
		console.log('Something went wrong.', err)
	})

	.then(() => {
		return p1.find({ "id": 5 })
	}).catch(err => {
		console.log('Data Not Found.', err)
	})

	.then((object) => {
		console.log('f',JSON.stringify(object))
		return p1.update({ 'age': 36 }, { 'age': 63 })
	}).catch(err => {
		console.log('Data Not Found.')
	})

	.then((object) => {
		console.log('u',JSON.stringify(object))
		return p1.delete({ 'age': 63 })
	}).catch(err => {
		console.log('Data Not Found.')
	})

	.then((object) => {
		console.log('d',JSON.stringify(object))
	}).catch(err => {
		console.log('Data Not Found.')
	})
