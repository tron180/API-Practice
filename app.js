console.log('Started....');

let array_of_numbers = [
    {
        "id" : 1,
        "name" : "Naman",
        "age" : 32
    },
    {
        "id" : 2,
        "name" : "Namrata",
        "age" : 36
    },
    {
        "id" : 3,
        "name" : "Rahul",
        "age" : 41
    },
    {
        "id" : 4,
        "name" : "Vivek",
        "age" : 45
    }
];


save()
    .then((object) => {
        console.log(object + ' successfully added..!!');
    }).catch(
        console.log('Something went wrong.')
    )


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






let apadter = mongodapter
let apadter = fileadapter

apadter.save()

adapter.update()

adapter.find()

adapter.delete()
