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









// info = [
//     {
//         "id": 1,
//         "name": "Naman",
//         "BirthYear": 1993,
//         "age": 32
//     },
//     {
//         "id": 2,
//         "name": "Namrata",
//         "BirthYear": 1994,
//         "age": 36
//     },
//     {
//         "id": 3,
//         "name": "Rahul",
//         "BirthYear": 1991,
//         "age": 41
//     },
//     {
//         "id": 4,
//         "name": "Vivek",
//         "BirthYear": 1995,
//         "age": 32
//     },
//     {
//         "id": 5,
//         "age": 23,
//         "name": "Alice",
//         "BirthYear": 1996
//     }
// ]

// object = {'age': 32}

// resultArr = []

// info.forEach(item => {
//     Object.keys(object).map(item1 => {
//         if (item[item1] == object[item1]) {
//             if (!checkId(resultArr, object.id)) {
//                 resultArr.push(item)
//                 return item
//             } else {
//                 // console.log(resultArr)
//             }
//         }
//     })
// })

// console.log(resultArr);


// function checkId(info, id){
//     return info.some(element => element.id === id)
// }