console.log('Started....');
let ArrayAdapter = require('./arrayApdapter');
let Person = require('./person.js');
let info = require('./database.json');
let FileAdapter = require('./fileAdapter');

// var arrayAdapter = new ArrayAdapter();
var fileAdapter = new FileAdapter()
var p1 = new Person(fileAdapter)


p1.save({ 'name': 'Alice', 'BirthYear': 1996 })
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
        return p1.delete({ 'name': 'Alice' })
    }).catch(err => {
        console.log('delete failed', err)
    })

    .then((object) => {
        console.log('Successfully Deleted..!!', JSON.stringify(object))
    }).catch(err => {
        console.log('Data Not Found.')
    })
