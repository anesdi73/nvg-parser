import { expect } from 'chai';
import 'mocha';
import NvgParser from '../lib/nvg-parser';
import { Text } from '../lib/nvg.data.2.0';

describe('Sample Text input test', () => {
	it('should be parsed properly', () => {
		const xml = `<?xml version="1.0" encoding="UTF-8"?>
		<nvg version="2.0.2" classification="NOT CLASSIFIED" xmlns="https://tide.act.nato.int/schemas/2012/10/nvg">
		<text x="65.042489747736" y="32.23745768948515" rotation="45" uri="urn:int:000040">
		<content>
		TEXT
		
		</content>
		</text>
		</nvg>`;
		const nvgParser = new NvgParser();
		const nvg = nvgParser.parse(xml);
		expect(nvg).to.be.not.null;
		expect(nvg.version).to.be.equal('2.0.2');
		expect(nvg.items.length).to.be.equal(1);

		const text = nvg.items[0] as Text;
		expect(text.x).to.be.equal(65.042489747736);
		expect(text.y).to.be.equal(32.23745768948515);
		expect(text.rotation).to.be.equal(45);
		expect(text.uri).to.be.equal('urn:int:000040');
		expect(text.content).to.be.equal('TEXT');
	});
});
