let info = require('./database.json');
let fs = require('fs');
const utils = require('./lib/utils');

let resultArr = [];

class FileAdapter{
    constructor(){}

    save(object){
        return new Promise((resolve, reject) => {
            if(object){
                const id = {'id': utils.IdGen(info)};
                object = {...id, ...object};
                info.push(object)
                writeJSONFile('database.json', info)
                resolve(object)
            }else{
                reject(err)
            }
        })
    }

    find(object){
        return new Promise((resolve, reject) => {
            if(object){
                resolve(findingInArray(info, object))
            }else{
                reject(err)
            } 
        })
    }

    update(finder_object, changed_data_object){
        return new Promise((resolve, reject) => {
            resultArr = []
            let foundObject = findingInArray(info, finder_object)
            foundObject.map(item => {
                return Object.keys(changed_data_object).map(item1 => {
                    let index = info.findIndex(p => p.id == item.id)
                    info[index][item1] = changed_data_object[item1]
                    writeJSONFile('database.json', info)
                    resolve(info[index])
                })
            })
            reject(err)
        })
    }

    delete(deleting_object){
        return new Promise((resolve, reject) => {
            resultArr = []
            let foundObject = findingInArray(info, deleting_object)
            foundObject.map(item => {
                info = info.filter(p => p.id !== item.id)
            })
            writeJSONFile('database.json', info)
            resolve(foundObject)
        })
    }
    
}

module.exports = FileAdapter;

let writeJSONFile = (filename, content) => {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
    
}

const findingInArray = (dataArray, object) => {
    dataArray.forEach((item, key) => {
        Object.keys(object).map(item1 => {
            if(item[item1] == object[item1]){
                if(!checkId(resultArr, object.id)){
                    resultArr.push(item)
                }else{
                    console.log(resultArr)
                }
            }
        })
    })
    return resultArr
}

const checkId = (info, id) => {
    return info.some(element => element.id === id)
}
