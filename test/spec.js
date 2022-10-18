const { expect } = require('chai');
const db = require('../db');
const supertest = require('supertest');
const app = supertest(require('../app'));
// Using mocha and chai write one test in your spec.js file
describe('addition', ()=> {
  describe('1 + 1', ()=> {
    it('equals 2', ()=> {
      expect(1 + 1).to.equal(2);
    });
  });
});

describe('My App', ()=> {
  //In your test file, write a before each which runs syncAndSeed
  beforeEach(async()=> {
    await db.syncAndSeed();
  });
  it('can sync', ()=> {});
  //db model test
  it('there are 5 actors', async()=> {
    const actors = await db.models.Actor.findAll();
    expect(actors.length).to.equal(5);

  });
  //Write a test using supertest which confirms that your express application has a working GET '/' route
  describe('API', ()=> {
    describe('/api/movies', ()=> {
      it('returns the movies', async()=> {
        const response = await app.get('/api/movies');
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(4);
      });
    });
    describe('/api/actors', ()=> {
      it('returns the actors', async()=> {
        const response = await app.get('/api/actors');
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(5);
      });
    });
  });
});
