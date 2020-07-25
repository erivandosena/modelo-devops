//bibliotecas utilizadas
const test = require('tape')
const supertest = require('supertest')
const app = require('./index')

//teste do endpoint
test('GET Sucesso', (t) => {
    supertest(app)
      .get('/concat?p1=fabio&p2=barbosa')      
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        t.assert(res.body.resultado === 'fabiobarbosa', "ok")
        t.end()  
      })
})

