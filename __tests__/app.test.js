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
  it('does a GET and returns HTML with an h1 and the word red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });
  it('does a GET and returns HTML with an h1 and the word blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });
  it('does a GET and returns HTML with an h1 and the word green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });
  it('404 route', () => {
    return request(app)
      .get('/whatever')
      .then(res => {
        expect(res.status).toEqual(404);
        expect(res.text).toEqual('Not Found');
      });
  });

});
