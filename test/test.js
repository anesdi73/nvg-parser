'use strict';
var expect = require('chai').expect;
var parser = require('../dist/nvg-parser.js');

describe('parse function test', () => {
    it('should throw when input is not nvg', () => {
        var parse = () => parser.parse('');
        expect(parse).to.throw();
    });
}
);