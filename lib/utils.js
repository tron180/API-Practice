// Id Generator
function IdGen() {
	return Math.random().toString(36).substring(7);
}

const findingInArray = (dataArray, object) => {
	let resultArr = []
	if(Object.keys(object).length !== 0){
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
	}
	else{
		return dataArray
	}
    return resultArr
}

const checkId = (info, id) => {
    return info.some(element => element.id === id)
}

module.exports.IdGen = IdGen;
module.exports.findingInArray =findingInArray;