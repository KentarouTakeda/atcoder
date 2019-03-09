import fs = require('fs');
if(process.argv[1].match(/Main.js$/)) { console.log(main(fs.readFileSync('/dev/stdin', 'utf8').split(/[\r\n\t ]/))); }

export function main(strings: string[]): string {
	const ret: any[] = [];
	const numbers = strings.map(Number);

	const [A, B] = numbers;
	const answer = f(A-1) ^ f(B);

	ret.push(answer);
	return ret.join('\n') + '\n';
}

function f(n: number): number {
	switch(n%4) {
	case 0:
		return n;
	case 1:
		return 1;
	case 2:
		return n+1;
	case 3:
		return 0;
	}
	throw new Error();
}
