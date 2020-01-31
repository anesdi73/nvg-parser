import { expect } from 'chai';
import 'mocha';
import NvgParser from '../lib/nvg-parser';
import { Point } from '../lib/nvg.data.2.0';

describe('Sample Point input test', () => {
	it('should parse it properly', () => {
		const xml = `<?xml version="1.0" encoding="UTF-8"?>
		<nvg version="2.0.2" classification="NOT CLASSIFIED" xmlns="https://tide.act.nato.int/schemas/2012/10/nvg">
		<point label="POINT" x="62.313400" y="31.178156" uri="urn:guid:2608bd00-9d95-11e9-952f-7b597f7deb88:3"/>
		<point label="POINT Course/Speed" x="63.313400" y="31.178156" course="90.0" speed="100.0" uri="urn:guid:2608bd00-9d95-11e9-952f-7b597f7deb88:4"/>
		<point label="POINT Stroke Style" style="stroke:#FF0000;stroke-width:3;stroke-opacity:0.7;stroke-dash:5,3,2" x="64.313400" y="31.178156" uri="urn:guid:2608bd00-9d95-11e9-952f-7b597f7deb88:5"/>
		<point label="POINT Fill Style" style="fill:#00FF00;fill-opacity:0.7" x="65.313400" y="31.178156" uri="urn:guid:2608bd00-9d95-11e9-952f-7b597f7deb88:6"/>
		<point label="POINT Text Style" style="font-family:Verdana;font-style:italic;font-weight:bold;font-color:#0000FF" x="66.313400" y="31.178156" uri="urn:guid:2608bd00-9d95-11e9-952f-7b597f7deb88:7"/>
		</nvg>`;
		const nvgParser = new NvgParser();
		const nvg = nvgParser.parse(xml);
		expect(nvg).to.be.not.null;
		expect(nvg.version).to.be.equal('2.0.2');
		expect(nvg.items.length).to.be.equal(5);

		const point0: Point = nvg.items[0] as Point;
		expect(point0.x).to.be.equal(62.3134);
		expect(point0.y).to.be.equal(31.178156);
		expect(point0.uri).to.be.equal('urn:guid:2608bd00-9d95-11e9-952f-7b597f7deb88:3');
		expect(point0.label).to.be.equal('POINT');
		expect(point0.course).to.be.undefined;
		expect(point0.speed).to.be.undefined;
		expect(point0.style).to.be.undefined;
		expect(point0.style).to.be.undefined;

		const point1: Point = nvg.items[1] as Point;
		expect(point1.course).to.be.equal(90);
		expect(point1.speed).to.be.equal(100);

		const point2: Point = nvg.items[2] as Point;
		expect(point2.style).to.be.not.null;
		const style2 = point2.style;
		expect(style2.stroke).to.be.equal('#FF0000');
		expect(style2['stroke-width']).to.be.equal(3);
		expect(style2['stroke-opacity']).to.be.equal(0.7);
		expect(style2['stroke-dash']).to.be.equal('5,3,2');

		const point3: Point = nvg.items[3] as Point;
		expect(point3.style).to.be.not.null;
		const style3 = point3.style;
		expect(style3.fill).to.be.equal('#00FF00');
		expect(style3['fill-opacity']).to.be.equal(0.7);
	});
});
