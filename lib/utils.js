// Id Generator
function IdGen() {
	return Math.random().toString(36).substring(7);
}

const findingInArray = (dataArray, object) => {
	let arr = dataArray.filter(item => {
		let bool = [];
	   for (let [key, value] of Object.entries(object)) {
			 (key in item && item[key] == value) ? bool.push(true) : bool.push(false);
		  }
		  return bool.includes(false)? false : true;
   })
   return arr;
}

module.exports.IdGen = IdGen;
module.exports.findingInArray =findingInArray;
