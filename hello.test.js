'use strict';

var expect = require('chai').expect;
var hello = require('./hello');

describe('run hello.js', function() {
  it('should return "Hello Travis CI!"', function() {
    expect(hello()).to.equal('Hello Travis CI!');
  });
});
