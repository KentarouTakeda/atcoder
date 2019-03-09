import fs = require('fs');
if(process.argv[1].match(/Main.js$/)) { console.log(main(fs.readFileSync('/dev/stdin', 'utf8').split(/[\r\n\t ]/))); }

export function main(strings: string[]): string {
	const ret: any[] = [];
	const numbers = strings.map(Number);

	const N = numbers.shift() || 0;
	const M = numbers.shift() || 0;
	const C = numbers.shift() || 0;

	const Bs: number[] = [];
	const As: number[][] = [];

	for(let i=0; i<M; i++) {
		Bs.push(numbers.shift() || 0);
	}

	for(let i=0; i<N; i++) {
		const A: number[] = [];
		for(let j=0; j<M; j++) {
			A.push(numbers.shift() || 0);
		}
		As.push(A);
	}

	let answer = 0;
	for(let i=0; i<N; i++) {
		let sum = 0;
		for(let j=0; j<M; j++) {
			sum += As[i][j] * Bs[j];
		}
		if(sum + C > 0) {
			answer++;
		}
	}

	ret.push(answer);

	return ret.join('\n') + '\n';
}
