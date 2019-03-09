import fs = require('fs');
if(process.argv[1].match(/Main.js$/)) { console.log(main(fs.readFileSync('/dev/stdin', 'utf8').split(/[\r\n\t ]/))); }

export function main(strings: string[]): string {
	const ret: any[] = [];
	const numbers = strings.map(Number);
	numbers.shift();
	numbers.sort(sortNumber);

	let n = 0;
	numbers.reduce((a, b) => {
		if(a<b) {
			n++
		}
		return b;
	});
	ret.push(n);

	return ret.join('\n') + '\n';
}

function sortNumber(a: number, b:number) {
	return a-b;
}
