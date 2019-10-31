// Save Method
let save = (array_of_numbers, object) => {
    return new Promise((resolve, reject) => {
        if (Object.keys(object).length > 0) {
            array_of_numbers.push(object);
            resolve(
                object
            );
        } else {
            reject('Failed to add.');
        }
    })
};

// Find Method
let find = (array_of_numbers, object) => {
    return new Promise((resolve, reject) => {
        Object.keys(object).map((key) => {
            for (let i = 0; i <= array_of_numbers.length; i++) { // loop for array of object
                for (let j = 0; j <= Object.keys(object).length; j++) { // loop for particular object keys
                    if (key === Object.keys(array_of_numbers[i])[j]) {
                        if (array_of_numbers[i][key] == object[key]) {
                            return resolve(array_of_numbers[i]);
                        }
                    }
                }
            }reject('Failed');
        })
    })
};

// Update Method
let update = (array_of_numbers, finder_object, changed_data_object) => {
    return new Promise((resolve, reject) => {
        
        for(let i = 0; i <= array_of_numbers.length; i++){
            for(let j = 0; j <= Object.keys(changed_data_object).length; j++){
                Object.keys(array_of_numbers[i]).filter(() => {
                    array_of_numbers[i].Object.keys(changed_data_object)[j] 
                })
            }
        }
    })
}

// Exports
exports.save = save;
exports.find = find;
exports.update = update;

// let update = () => {

// }


// let deleted = (element) => {
//     for(let i = 0; i <= array_of_numbers.length; i++){
//         if ( arr[i] === element) {
//             arr.splice(i, 1); 
//         }
//     }
//     console.log(array_of_numbers);
// };