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
  britishToAmerican(text){
    const dictionary = {...britishOnly,...reverser(americanToBritishSpelling)}
    const titles = reverser(americanToBritishTitles)
    const timeRegex = /([1-9]|1[012]).[0-5][0-9]/g; 
    const locale = "translateToAmerican"
    const translated = this.translate(text, dictionary, titles, timeRegex, locale)
    //if matchesmap is empty returns null, therefore translated is falsy
    if(!translated){
      return text
    }
    return translated
    
  }
 
  americanToBritish(text){
    const dictionary = {...americanOnly,...americanToBritishSpelling}
    const titles = americanToBritishTitles
    const timeRegex = /([1-9]|1[012]):[0-5][0-9]/g; 
    const locale = "translateToBritish"
    const translated = this.translate(text, dictionary, titles, timeRegex, locale)
    //if matchesmap is empty returns null, therefore translated is falsy
    if(!translated){
      return text
    }
    return translated
    
  }

  translate(text, dictionary, titles, timeRegex, locale){
    const givenText = text
    const lowerText = givenText.toLowerCase();
    const matchesMap = {};


    // Search for titles/honorifics and add'em to the matchesMap object
    Object.entries(titles).map(([k, v]) => {
      if (lowerText.includes(k)) {
        matchesMap[k] = v[0].toUpperCase() + v.slice(1);
        // matchesMap[k] = v.charAt(0).toUpperCase() + v.slice(1);
      }
    });
    //check for words with spcaes first otherwise some translations come out wrong
    const wordsWithSpace = Object.fromEntries(
      Object.entries(dictionary).filter(([k, v]) => k.includes(" "))
    );

    Object.entries(wordsWithSpace).map(([k, v]) => {
      if (lowerText.includes(k)) {
        matchesMap[k] = v;
      }
    });

    //now look for individual words 
    lowerText
      .match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g)
      .map((word) => {
        if (dictionary[word]) return (matchesMap[word] = dictionary[word]);
      });
    
    // console.log(matchesMap)

    //match the given times too, sorta annoying 
    const matchTimes = lowerText.match(timeRegex)
    if (matchTimes) {
      matchTimes.map((e) => {
        if (locale === "translateToBritish") {
          return (matchesMap[e] = e.replace(":", "."));
        }
        return (matchesMap[e] = e.replace(".", ":"));
      });
    }

    console.log(matchesMap)

    
    //handle no matches situation here, no need to go further
    if(Object.keys(matchesMap).length == 0) return null;
    
    const translationNoHighlight = this.replaceAll(text, matchesMap);
    const translationHighlighted = this.replaceAllHighlighted(text, matchesMap)
    
    //don't forget to return 
    return [translationNoHighlight, translationHighlighted];
  }

  replaceAll(text, matchesMap){
    // make a regex out of the that matched in order to replace 
    const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
    // console.log(re)
    //second argument of replace can be function, this way it goes word by word inside the given texti find it in mathesMap and returns that word to replace the word in text
    return text.replace(re, (word) => {
      //gets very annoying when testing, keep it commented
      // console.log(word, re)
      return matchesMap[word.toLowerCase()]});
  }

  replaceAllHighlighted(text, matchesMap){
    const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");

    return text.replace(re, (word) => {
       return `<span class="highlight">${matchesMap[word.toLowerCase()]}</span>`
    })
  }






  // americanToBritish(stringOfWords){

  //   let reversedBritishOnly = reverser(britishOnly)

  //   let ameToBriAll = {...americanToBritishTitles,...americanToBritishSpelling,...americanOnly,...reversedBritishOnly}

  //   let split = stringOfWords.split(' ')
  //   console.log(split)
  //   for(let i = 0; i < split.length; i++){
  //     if(ameToBriAll[split[i]]){
  //       console.log('yep')
  //     }
  //   }
  //   //this returns an array of key value pairs Object.fromEntries fixes it 
  //   // console.log(Object.entries(ameToBriAll).filter(([k, v]) => k.includes(" ")))

  // }

  // britishToAmerican(stringOfWords){
  //   let reversedAmericanOnly = reverser(americanOnly)
  //   let britishToAmericanTitles = reverser(americanToBritishTitles)
  //   let britishToAmericanSpelling = reverser(americanToBritishSpelling)

  //   let briToAmeAll = {...reversedAmericanOnly, ...britishToAmericanTitles, ...britishToAmericanSpelling, ...britishOnly}

  //   console.log(briToAmeAll)
  // }



  // testing(){
  //   reverser(britishOnly)
  // }


}

module.exports = Translator;