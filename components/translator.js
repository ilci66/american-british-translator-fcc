const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')


  const reverser = (object) => {
    //const returnedTarget = Object.assign(target, source);

    let result = Object.assign(
      {},
      ...Object.entries(object).map(([k, v]) => ( { [v]: k } ) ) );
    console.log(result)
    return result;

    // for (const [ k, v ] of Object.entries(britishOnly)){
    //   // console.log(`${k}, ${v}`)
    //   let newObj = {...[v]:k}
    //   console.log(newObj)
    // }
  }
class Translator {
  
  americanToBritish(stringOfWords){

    let reversedBritishOnly = reverser(britishOnly)

    let ameToBriAll = {...americanToBritishTitles,...americanToBritishSpelling,...americanOnly,...reversedBritishOnly}

    // let split = stringOfWords.split(' ')
    // for(let i = 0; i < split.length; i++){
    //   for(const [k, v] of Object.entries(ameToBriAll)){
    //     if(split[i] == k){
    //       split.replace(split[i], v)
    //     }
    //   }
    // }
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