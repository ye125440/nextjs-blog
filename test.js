const fs = require('fs');
const path = require('path');

const targetDirectory = path.join(__dirname, 'components');
const fileNames = fs.readdirSync(targetDirectory);
console.log('debug ~ file: test.js ~ line 6 ~ fileNames', fileNames);

const rename = (dir) => {
	const fileNames = fs.readdirSync(dir);
	fileNames.forEach((fileName) => {
		if (/\.js$/.test(fileName)) {
			const newName = fileName.replace(/\.js$/, '.tsx');
			console.log(
				'debug ~ file: test.js ~ line 16 ~ fileNames.forEach ~ newName',
				newName
			);
			fs.renameSync(path.join(dir, fileName), path.join(dir, newName));
		} else {
			console.log('it is dir', fileName);
			const childrenDirectory = path.join(dir, fileName);
			rename(childrenDirectory);
		}
	});
};

rename(targetDirectory);
