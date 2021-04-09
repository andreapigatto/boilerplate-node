import supertest, { SuperTest, Test } from 'supertest'
import app from './app'

describe('app', () => {
  let request: SuperTest<Test>
  beforeEach(() => {
    request = supertest(app)
  })
  it('should return a successful response for GET /', (done) => {
    request.get('/api/example').expect(200, done)
  })
})
