const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('Uv5ryLYOnV', uuidlib.v4());
	}

module.exports = generateId
