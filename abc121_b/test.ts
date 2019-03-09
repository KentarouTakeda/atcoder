import fs = require('fs');
import { main } from './main';
import assert = require('assert');

const text = fs.readFileSync(__dirname + '/answers.txt', 'utf8');
const files = text.split(/^---$\n/gm);

const cases: [string,string][] = []
while(files.length) {
	cases.push([
		files.shift() || '',
		files.shift() || '',
	]);
}

cases.forEach((c, i) => {
	console.log(`Case: ${i+1}`);
	const input = c[0];
	const expected = c[1];
	const actual = main(input.split(/[\r\n\t ]/));

	if(actual !== expected) {
		console.log('NG')
		console.log('---');
		console.log(input.trim());
		console.log('---');
		console.log(expected.trim());
		console.log('---');
		console.log(actual.trim());
	} else {
		console.log(`OK`);
	}
});
