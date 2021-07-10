const path = require('path');
const fs = require('fs');

function getManifest() {
	try {
		return JSON.parse(
			fs.readFileSync(path.resolve(__dirname, '../../dist/manifest.json'))
		);
	} catch (error) {
		console.log(error);
	}
}

module.exports = getManifest;
