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
            } reject('Failed');
        })
    })
};

// Update Method
let update = (array_of_numbers, finder_object, changed_data_object) => {
    return new Promise((resolve, reject) => {
        array_of_numbers.map(item => {
            Object.keys(finder_object).map(item1 => {
                if (item[item1] == finder_object[item1]) {
                    item[item1] = changed_data_object[item1]
                    return resolve(array_of_numbers);
                }
            })
        });
        reject('Failed');
    })
};

// Delete Method
let deleted = (array_of_numbers, deleting_object) => {
    return new Promise((resolve, reject) => {
        array_of_numbers.map(item => {
            Object.keys(deleting_object).map(item1 => {
                if(item[item1] == deleting_object[item1]) {
                    delete item[item1]
                    return resolve(array_of_numbers)
                }
            })
        })
        reject('Failed');
    })
}

// Exports
exports.save = save;
exports.find = find;
exports.update = update;
exports.deleted = deleted;