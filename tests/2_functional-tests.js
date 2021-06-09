const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  let myRoute = "/api/translate"
// Translation with text and locale fields: POST request to /api/translate
  test('with text and locale fields', (done) => {
    chai
      .request(server)
      .post(myRoute)
      .send({text:"flavor", locale:"american-to-british"})
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.translation, '<span class="highlight">flavour</span>')
        done()
      })
  })
// Translation with text and invalid locale field: POST request to /api/translate
  test('with test and invalid locale', (done) => {
    chai  
      .request(server)
      .post(myRoute)
      .send({text:"flavor", locale:"american-to-pokemon"})
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Invalid value for locale field')
        done()
      })
  })
// Translation with missing text field: POST request to /api/translate
  test('missing text field', (done) => {
    chai
      .request(server)
      .post(myRoute)
      .send({locale:"american-to-british"})
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Required field(s) missing')
        done()
      })
  })
// Translation with missing locale field: POST request to /api/translate
  test('missing locale field', (done) => {
    chai
      .request(server)
      .post(myRoute)
      .send({text:"flavor", locale:""})
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Required field(s) missing')
        done()
      })
  })
// Translation with empty text: POST request to /api/translate
  test('empty text', (done) => {
    chai
      .request(server)
      .post(myRoute)
      .send({text:"", locale:"american-to-british"})
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'No text to translate')
        done()
      })
  })
// Translation with text that needs no translation: POST request to /api/translate
  test('no need for translation', (done) => {
    chai
      .request(server)
      .post(myRoute)
      .send({text:"pokemon", locale:"american-to-british"})
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.translation, "Everything looks good to me!")
        done()
      })
  })
})
