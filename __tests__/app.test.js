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
  it('does a POST request', () => {
    return request(app)
      .post('/')
      .send('ello ello ello')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('ello ello ello');
      });
  });

});
