import fs = require('fs');
if(process.argv[1].match(/Main.js$/)) { console.log(main(fs.readFileSync('/dev/stdin', 'utf8').split(/[\r\n\t ]/))); }

export function main(strings: string[]): string {
	const ret: any[] = [];
	const numbers = strings.map(Number);

	const N = numbers.shift()||0;
	const M = numbers.shift()||0;

	const shops: [number, number][] = [];
	for(let i=0; i<N; i++) {
		shops.push([
			numbers.shift()||0,
			numbers.shift()||0,
		]);
	}

	shops.sort((a, b) => a[0] - b[0]);

	let sum = 0;
	let m = 0;
	for(let shop of shops) {
		if(shop[1] + m > M) {
			sum += shop[0] * (M - m);
			break;
		} else {
			sum += shop[0] * shop[1];
			m += shop[1];
		}
	}

	ret.push(sum)
	return ret.join('\n') + '\n';
}

function numberSort(a: number, b: number): number {
	return a-b;
}
