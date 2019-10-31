let save = (array_of_numbers, object) => {
    return new Promise((resolve, reject) => {
        if(object.number > 0){
            array_of_numbers.push(object);
            resolve(
                object
            );
        }
        else{
            reject('Failed');
        }
    })
};

// let update = () => {

// }

// let find = (element) => {
//     for(let i = 0; i <= array_of_numbers.length; i++){
//         if ( arr[i] === element) {
//             console.log('Element is at: ' + i + ' position.'); 
//         }
//     }
// };

// let deleted = (element) => {
//     for(let i = 0; i <= array_of_numbers.length; i++){
//         if ( arr[i] === element) {
//             arr.splice(i, 1); 
//         }
//     }
//     console.log(array_of_numbers);
// };