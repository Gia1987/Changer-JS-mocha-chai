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
  it('return 10p for 10', function(){
    expect(changer.giveChange(10)).to.eql(['10p'])
  });
  it('return 20p for 20', function(){
    expect(changer.giveChange(20)).to.eql(['20p'])
  });
  it('return 50p for 50', function(){
    expect(changer.giveChange(50)).to.eql(['50p'])
  });
  it('return 1 £ for 100', function(){
    expect(changer.giveChange(100)).to.eql(['1£'])
  });
  it('return 2£ for 200', function(){
    expect(changer.giveChange(200)).to.eql(['2£'])
  });
});
