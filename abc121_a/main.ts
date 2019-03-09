import fs = require('fs');
if(process.argv[1].match(/Main.js$/)) { console.log(main(fs.readFileSync('/dev/stdin', 'utf8').split(/[\r\n\t ]/))); }

export function main(strings: string[]): string {
	const ret: any[] = [];
	const numbers = strings.map(Number);

	const [H, W, h, w] = numbers

	ret.push((H-h)*(W-w));

	return ret.join('\n') + '\n';
}
