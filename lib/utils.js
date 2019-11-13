// Id Generator
function IdGen() {
	return Math.random().toString(36).substring(7);
}

module.exports.IdGen = IdGen;