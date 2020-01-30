import { expect } from 'chai';
import 'mocha';
import NvgParser from '../../lib/2.0/nvg-parser';

describe('NVG 2.0 Invalid input test', () => {
	it('should throw exception when empty is received', () => {
		const nvgParser = new NvgParser();
		const parseAction = () => nvgParser.parse('');
		expect(parseAction).to.throw();
	});
});
