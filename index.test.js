//bibliotecas utilizadas
const test = require('tape')
const supertest = require('supertest')
const app = require('./index')

//teste do endpoint
test('GET Sucesso', (t) => {
    supertest(app)
      .get('/juntar?palavra1=fabio&palavra2=barbosa')      
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        t.assert(res.body.resultado === 'fabiobarbosa', "ok")
        t.end()  
      })
})

test('GET Tratamento palavra indesejada', (t) => {
    supertest(app)
      .get('/juntar?palavra1=banana&palavra2=barbosa')      
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        t.assert(res.body.resultado === 'Não gosto de banana', "ok")
        t.end()  
      })
})
