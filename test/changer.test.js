var expect = require('chai').expect;
var mocha = require('mocha');
var Changer = require('../src/changer.js');

describe('Changer', function() {
  var changer = new Changer()
  it('return 1p for 1', function () {
    expect(changer.giveChange(1)).to.eql(['1p'])
  });

});
