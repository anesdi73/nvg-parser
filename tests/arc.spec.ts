import { expect } from 'chai';
import 'mocha';
import NvgParser from '../lib/nvg-parser';
import { Point, Arc } from '../lib/nvg.data.2.0';

describe('Sample Arc input test', () => {
	it('should parse it properly', () => {
		const xml = `<?xml version="1.0" encoding="UTF-8"?>
		<nvg version="2.0.2" classification="NOT CLASSIFIED" xmlns="https://tide.act.nato.int/schemas/2012/10/nvg">
		<arc label="ARC" cx="64.899838" cy="32.868797" rx="56534.049489" ry="122376.796997" startangle="45.0" endangle="135.0" rotation="305.264549" uri="urn:guid:260b93c2-9d95-11e9-9a44-7701bfd39356:3"/>
		<arc label="ARC Stroke Style" style="stroke:#FF0000;stroke-width:3;stroke-opacity:0.7;stroke-dash:5,3,2" cx="64.935732" cy="31.562555" rx="56795.530016" ry="123603.266537" startangle="45.0" endangle="135.0" rotation="304.857593" uri="urn:guid:260b93c2-9d95-11e9-9a44-7701bfd39356:4"/>
		<arc label="ARC Text Style" style="font-family:Verdana;font-style:italic;font-weight:bold;font-color:#0000FF" cx="64.888691" cy="28.642328" rx="57383.221570" ry="126137.332408" startangle="45.0" endangle="135.0" rotation="304.044329" uri="urn:guid:260b93c2-9d95-11e9-9a44-7701bfd39356:5"/>
		</nvg>`;
		const nvgParser = new NvgParser();
		const nvg = nvgParser.parse(xml);
		expect(nvg).to.be.not.null;
		expect(nvg.version).to.be.equal('2.0.2');
		expect(nvg.items.length).to.be.equal(3);

		const arc0 = nvg.items[0] as Arc;
		expect(arc0.label).to.be.equal('ARC');
		expect(arc0.cx).to.be.equal(64.899838);
		expect(arc0.cy).to.be.equal(32.868797);
		expect(arc0.rx).to.be.equal(56534.049489);
		expect(arc0.ry).to.be.equal(122376.796997);
		expect(arc0.startangle).to.be.equal(45);
		expect(arc0.endangle).to.be.equal(135);
		expect(arc0.rotation).to.be.equal(305.264549);
		expect(arc0.uri).to.be.equal('urn:guid:260b93c2-9d95-11e9-9a44-7701bfd39356:3');
	});
});
