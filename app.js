console.log('Started....');
let adapter = require('./arrayApdapter');

let array_of_numbers = [];

adapter.save(array_of_numbers, { "id": 5, "age": 39 })
.then((object) => {
    console.log('Successfully added..!!');
}).catch(err => {
    console.log('Something went wrong.', err)
})

adapter.save(array_of_numbers, { "id": 5, "age": 36 })
.then((object) => {
    console.log('Successfully added..!!');
}).catch(err => {
    console.log('Something went wrong.', err)
})

adapter.find(array_of_numbers, { "age": 36 })
.then((object) => {
    console.log('Found on ' + JSON.stringify(object))
}).catch(err => {
    console.log('Data Not Found.')
})

adapter.update(array_of_numbers, {'age': 36}, {'age': 63})
    .then((array_of_numbers) => {
        console.log('Updated Data: ' + JSON.stringify(array_of_numbers))
    }).catch(err => {
        console.log('Data Not Found.')
    })

adapter.deleted(array_of_numbers, {'age': 45})
    .then((array_of_numbers) => {
        console.log('Updated Data: ' + JSON.stringify(array_of_numbers))
    }).catch(err => {
        console.log('Data Not Found.')
    })
