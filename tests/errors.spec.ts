import { expect } from 'chai';
import 'mocha';
import NvgParser from '../lib/nvg-parser';
describe('Invalid input test', () => {
	it('should throw exception when empty is received', () => {
		const nvgParser = new NvgParser();
		const parseAction = () => nvgParser.parse('');
		expect(parseAction).to.throw();
	});
});
