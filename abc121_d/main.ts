import fs = require('fs');
if(process.argv[1].match(/Main.js$/)) { console.log(main(fs.readFileSync('/dev/stdin', 'utf8').split(/[\r\n\t ]/))); }

export function main(strings: string[]): string {
	const ret: any[] = [];
	const numbers = strings.map(Number);

	const [A, B] = numbers;

	let answer = A
	for(let i=A+1; i<=B; i++) {
		answer = answer ^ i;
	}

	ret.push(answer);
	return ret.join('\n') + '\n';
}
