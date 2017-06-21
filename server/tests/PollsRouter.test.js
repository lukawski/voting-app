import request from 'supertest';
import Api from '../src/Api';

const app = new Api().express;

describe('Voting API', () => {
  describe('GET /api/polls - get all polls', () => {
    let expectedProps = ['id', 'name', 'quantity', 'price'];

    it('should return JSON array', () => {
      return request(app).get('/api/polls')
        .expect(200)
        .then(res => {
          expect(res.body).toBeInstanceOf(Array);
        });
    });

    it('should return objs w/ correct props', () => {
      return request(app).get('/api/polls')
        .expect(200)
        .then(res => {
          let sampleKeys = Object.keys(res.body[0]);
          expectedProps.forEach(key => {
            expect(sampleKeys.includes(key)).toBe(true);
          });
        });
    });

    it('shouldn\'t return objs w/ extra props', () => {
      return request(app).get('/api/polls')
        .expect(200)
        .then(res => {
          let extraProps = Object.keys(res.body[0]).filter(key => {
            return !expectedProps.includes(key);
          });
          expect(extraProps.length).toBe(0);
        })
    });
  })
});
