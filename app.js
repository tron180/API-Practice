console.log('Started....');
let adapter = require('./arrayApdapter');

let array_of_numbers = [
    {
        "id": 1,
        "age": 32
    },
    {
        "id": 2,
        "age": 36
    },
    {
        "id": 3,
        "age": 41
    },
    {
        "id": 4,
        "age": 45
    }
];

adapter.save(array_of_numbers, { "id": 5, "age": 39 })
    .then((object) => {
        console.log('Successfully added..!!');
    }).catch(err => {
        console.log('Something went wrong.', err)
    })

adapter.find(array_of_numbers, { "age": 36 })
    .then((object) => {
        console.log('Found on ' + object)
    }).catch(err => {
        console.log('Data not found.')
    })

// // Converting from Array to Object
// const converter = (array) => {
//     return Object.assign({}, array);
// }

// var object_version_of_array = {}

// // Condition check for Array
// if (Array.isArray(array_of_numbers)){    
//     object_version_of_array = converter(array_of_numbers);
// }

// console.log(object_version_of_array);


// Add Element
// addElement = (data) => {
//     arr.push(data);
//     console.log(arr);
// }

// getSpecific = (position) => {

//     console.log(arr[position]);
// }


// getAll = () => {
//     console.log(arr);
// }

// deleteSpecific = (value) => {
//     var index = arr.indexOf(value);
//     if(index > -1){
//         arr.splice(index, 1)
//     }
//     console.log(arr);    
// }






// let apadter = mongodapter
// let apadter = fileadapter

// apadter.save()

// adapter.update()

// adapter.find()

// adapter.delete()
