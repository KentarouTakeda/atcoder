import { JSDOM } from 'jsdom';
import URL = require('url');
import path = require('path');

const url = 'https://atcoder.jp/contests/agc030/tasks/agc030_a';

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

	const parseUrl = URL.parse(url);
	if(parseUrl.pathname == null) {
		throw new Error();
	}
	const name = path.basename(parseUrl.pathname);

	console.log(answers);
	console.log(name);
})
