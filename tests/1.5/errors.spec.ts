import { expect } from 'chai';
import 'mocha';
import NvgParser from '../../lib/1.5/nvg-parser';

describe('NVG 1.5 Invalid input test', () => {
	it('should throw exception when empty is received', () => {
		const nvgParser = new NvgParser();
		const parseAction = () => nvgParser.parse('');
		expect(parseAction).to.throw();
	});
});
