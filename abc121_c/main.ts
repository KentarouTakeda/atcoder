import fs = require('fs');
if(process.argv[1].match(/Main.js$/)) { console.log(main(fs.readFileSync('/dev/stdin', 'utf8').trim().split(/[\r\n\t ]+/))); }

export function main(strings: string[]): string {
	const ret: any[] = [];
	const numbers = strings.map(Number);

	numbers.shift();
	const M = numbers.shift() as number;

	const shops: [number, number][] = [];

	for(let i=0; i<=numbers.length;) {
		if(numbers[i] == null || numbers[i+1] == null) {
			break;
		}
		shops.push([
			numbers[i],
			numbers[i+1],
		]);
		i += 2;
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
