const request = require('supertest')
const app = require('./app')

describe('GET /', () => {
  it('devrait retourner un status 200', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
  })

  it('devrait retourner le message de bienvenue', async () => {
    const res = await request(app).get('/')
    expect(res.text).toContain('Bienvenue')
  })
})
