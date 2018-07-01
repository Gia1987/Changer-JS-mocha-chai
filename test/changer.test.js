var expect = require('chai').expect;
var mocha = require('mocha');
var Changer = require('../src/changer.js');

describe('Changer', function() {
  var changer = new Changer()
  it('return 1p for 1', function () {
    expect(changer.giveChange(1)).to.eql(['1p'])
  });
  it('return 2p for 2', function() {
    expect(changer.giveChange(2)).to.eql(['2p'])
  });
  it('return 5p for 5', function() {
    expect(changer.giveChange(5)).to.eql(['5p'])
  });
});
