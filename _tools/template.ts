import program = require('commander');
import { JSDOM } from 'jsdom';
import URL = require('url');
import path = require('path');
import fse = require('fs-extra');
const SimpleGit = require('simple-git');

program
	.usage('<url>')
	.parse(process.argv)
;

if(program.args.length !== 1) {
	program.outputHelp();
	process.exit(1);
	throw new Error();
}

const url = program.args[0];
if(url == null) {
	program.outputHelp();
	process.exit(1);
	throw new Error();
}

const parseUrl = URL.parse(url);
if(parseUrl.pathname == null) {
	throw new Error();
}
const name = path.basename(parseUrl.pathname);
if(fse.existsSync(__dirname + '/../' + name)) {
	console.error(`Directory ${name} already exists.`);
	process.exit(1);
	throw new Error();
}

const dom = JSDOM.fromURL(url).then(dom => {
	const document = dom.window.document;
	const lang = document.getElementsByClassName('lang-ja');
	let search: (Element|Document) = document;
	if(lang.length) {
		search = lang[0];
	}

	const pres = search.getElementsByTagName('pre');
	if(pres.length === 0) {
		throw new Error();
	}

	const texts = Array.from(pres).slice(1).map(e => e.innerHTML.trim());
	const answers = texts.join('\n---\n') + '\n';

	fse.copySync(__dirname + '/../_template', __dirname + '/../' + name);
	fse.writeFileSync(__dirname + '/../' + name + '/answers.txt', answers);
	const git = SimpleGit(__dirname + '/../');
	git.add(__dirname + '/../' + name, (err: any) => {
		if(err) {
			throw new Error(err);
		}
		git.commit(url, (err: any, summary: any) => {
			if(err) {
				throw new Error(err);
			}
			console.log(`${url} ${summary.commit}`);
		});
	});
})
