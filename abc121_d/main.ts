import fs = require('fs');
if(process.argv[1].match(/Main.js$/)) { console.log(main(fs.readFileSync('/dev/stdin', 'utf8').split(/[\r\n\t ]/))); }

export function main(strings: string[]): string {
	const ret: any[] = [];
	const numbers = strings.map(Number);

	const [A, B] = numbers;
	const answer = xor ( f(A-1), f(B) );

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
	return 0;
}

function xor(a: number, b:number): number {
	const _a = Array.from(a.toString(2)).reverse().map(s => parseInt(s));
	const _b = Array.from(b.toString(2)).reverse().map(s => parseInt(s));

	let _bits: number[] = [];
	for(let i=0; i<Math.max(_a.length, _b.length); i++) {
		_bits.unshift( ((_a[i]||0) + (_b[i]||0)) === 1 ? 1 : 0  )
	}

	return parseInt(_bits.join(''), 2);
}
