import jsDom from 'jsdom';
export default function createDomParser() {
	const { JSDOM } = jsDom;
	const domParserConstructor = new JSDOM().window.DOMParser;
	return new domParserConstructor();
}
