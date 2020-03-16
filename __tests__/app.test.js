const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns hi', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

});
