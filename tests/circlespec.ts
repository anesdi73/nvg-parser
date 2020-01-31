import { expect } from 'chai';
import 'mocha';
import NvgParser from '../lib/nvg-parser';
import { Style, Circle } from '../lib/nvg.data.2.0';

describe('Sample Circle input test', () => {
	it('should parse it properly', () => {
		const xml = `<?xml version="1.0" encoding="UTF-8"?>
		<nvg version="2.0.2" classification="NOT CLASSIFIED" xmlns="https://tide.act.nato.int/schemas/2012/10/nvg">
		<circle label="CIRCLE" cx="65.042489" cy="32.237457" r="80454.964049" uri="urn:guid:260a378e-9d95-11e9-bd41-f7733e89c58e:3"/>
		<circle label="CIRCLE Stroke Style" style="stroke:#FF0000;stroke-width:3;stroke-opacity:0.7;stroke-dash:5,3,2" cx="64.930026" cy="30.827247" r="81183.767055" uri="urn:guid:260a378e-9d95-11e9-bd41-f7733e89c58e:4"/>
		<circle label="CIRCLE Fill Style" style="fill:#00FF00;fill-opacity:0.7" cx="64.881789" cy="29.208982" r="81960.688778" uri="urn:guid:260a378e-9d95-11e9-bd41-f7733e89c58e:5"/>
		<circle label="CIRCLE Text Style" style="font-family:Verdana;font-style:italic;font-weight:bold;font-color:#0000FF" cx="64.751971" cy="27.299914" r="82859.820396" uri="urn:guid:260a378e-9d95-11e9-bd41-f7733e89c58e:6"/>
		</nvg>`;
		const nvgParser = new NvgParser();
		const nvg = nvgParser.parse(xml);
		expect(nvg).to.be.not.null;
		expect(nvg.version).to.be.equal('2.0.2');
		expect(nvg.items.length).to.be.equal(4);

		const circle0 = nvg.items[0] as Circle;
		expect(circle0.label).to.be.equal('CIRCLE');
		expect(circle0.cx).to.be.equal(65.042489);
		expect(circle0.cy).to.be.equal(32.237457);
		expect(circle0.r).to.be.equal(80454.964049);
		expect(circle0.uri).to.be.equal('urn:guid:260a378e-9d95-11e9-bd41-f7733e89c58e:3');

		const circle1 = nvg.items[1] as Circle;
		const style1 = circle1.style;
		expect(style1.stroke).to.be.equal('#FF0000');
		expect(style1['stroke-width']).to.be.equal(3);
		expect(style1['stroke-opacity']).to.be.equal(0.7);
		expect(style1['stroke-dash']).to.be.equal('5,3,2');

		const circle2 = nvg.items[2] as Circle;
		const style2 = circle2.style;
		expect(style2.fill).to.be.equal('#00FF00');
		expect(style2['fill-opacity']).to.be.equal(0.7);

		const circle3 = nvg.items[3] as Circle;
		const style3 = circle3.style;
		expect(style3.fill).to.be.equal('#00FF00');
		expect(style3['font-family']).to.be.equal('Verdana');
		expect(style3['font-style']).to.be.equal('italic');
		expect(style3['font-weight']).to.be.equal('bold');
		expect(style3['font-color']).to.be.equal('#0000FF');
	});
});
