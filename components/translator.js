const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
//ran into an error when I tried async method, this fixed it
const regeneratorRuntime = require("regenerator-runtime");


const reverser = (object) => {
  let result = Object.assign(
    {},
    ...Object.entries(object).map(([k, v]) => ( { [v]: k } ) ) );
  // console.log(result)
  return result;
}
class Translator {
  
  americanToBritish(stringOfWords){

    let reversedBritishOnly = reverser(britishOnly)

    let ameToBriAll = {...americanToBritishTitles,...americanToBritishSpelling,...americanOnly,...reversedBritishOnly}

    let split = stringOfWords.split(' ')
    console.log(split)
    for(let i = 0; i < split.length; i++){
      if(ameToBriAll[split[i]]){
        console.log('yep')
      }
    }
    //this returns an array of key value pairs Object.fromEntries fixes it 
    // console.log(Object.entries(ameToBriAll).filter(([k, v]) => k.includes(" ")))

  }

  britishToAmerican(stringOfWords){
    let reversedAmericanOnly = reverser(americanOnly)
    let britishToAmericanTitles = reverser(americanToBritishTitles)
    let britishToAmericanSpelling = reverser(americanToBritishSpelling)

    let briToAmeAll = {...reversedAmericanOnly, ...britishToAmericanTitles, ...britishToAmericanSpelling, ...britishOnly}

    console.log(briToAmeAll)
  }



  // testing(){
  //   reverser(britishOnly)
  // }


}

module.exports = Translator;