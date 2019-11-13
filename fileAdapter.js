let info = require('./database.json');
let fs = require('fs');
const utils = require('./lib/utils');

let resultArr = [];

class FileAdapter {
	constructor() { }

	save(object) {
		return Promise.resolve()
			.then(() => {
				if (object) {
					const id = { 'id': utils.IdGen(info) };
					object = { ...id, ...object };
					return object
				}
			})
			.then(object => {
				info.push(object)
				writeJSONFile('database.json', info)
				return object
			})
			.catch(err => {
				throw err
			})
	}

	find(object) {
		return Promise.resolve()
			.then(() => {
				if (object) {
					return object
				}
			})
			.then(object => {
				return utils.findingInArray(info, object)
			})
	}

	update(finder_object, changed_data_object) {
		return Promise.resolve()
			.then(() => {
				resultArr = []
				console.log("hiiii");
				let foundObject = utils.findingInArray(info, finder_object)
				foundObject.map(item => {
					Object.keys(changed_data_object).forEach(item1 => {
						let index = info.findIndex(p => p.id == item.id)
						info[index][item1] = changed_data_object[item1]
						writeJSONFile('database.json', info)
						
						return info
					})
				})
					.catch(err => {
						throw err
					})
			})
	}

	delete(deleting_object) {
		return Promise.resolve()
			.then(() => {
				resultArr = []
				let foundObject = utils.findingInArray(info, deleting_object)
				foundObject.map(item => {
					info = info.filter(p => p.id !== item.id)
				})
				writeJSONFile('database.json', info)
				return []
			})
			.catch(err => {
				throw err
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
