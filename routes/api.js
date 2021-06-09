'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { locale } = req.body;
      const { text } = req.body
      let translation;
      if(text == ""){
        return res.json({"error":"No text to translate"});
      }
      if(!locale || text == undefined){
        return res.json({ error: 'Required field(s) missing' });
      }
      if(locale != "american-to-british" && locale != "british-to-american"){
        return res.json({ error: 'Invalid value for locale field' });
      }
      if(locale == "american-to-british"){
        translation = translator.americanToBritish(text)
      }else if(locale == "british-to-american"){
        translation = translator.britishToAmerican(text)
      }

      if(translation == text){
        return res.json({text: text, translation:"Everything looks good to me!"})
      }else if(translation != text){
        //bring the highlighted one 
        return res.json({text, translation: translation[1]})
      }
    })
      // console.log(req.body.locale)
      // console.log(req.body.text)
      // translator.britishToAmerican('dr colourful flat 10.10')
  
};
