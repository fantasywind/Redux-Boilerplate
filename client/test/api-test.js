import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import fetch from 'node-fetch';

describe("asynchronous", function() {
it(' return an object', function(done){
  fetch('https://api.github.com/users/torvus')
    .then(function (response) {
      expect(response).to.be.an('object');
      done();
    })
    .catch(function (error) {
      console.log(error);
    });
});
});
