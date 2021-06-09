const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();
suite('Unit Tests', () => {
  // Translate Mangoes are my favorite fruit. to British English
  test('to British, mangoes are my favorite fruit', (done) => {
    let translation = translator.americanToBritish("Mangoes are my favorite fruit.")
    assert.equal(translation[0], "Mangoes are my favourite fruit.")
    done();
  })
  // Translate I ate yogurt for breakfast. to British English
  test('to British, I ate yogurt for breakfast.', (done) => {
    let translation = translator.americanToBritish("I ate yogurt for breakfast.")
    assert.equal(translation[0], "I ate yoghurt for breakfast.")
    done();
  })
  // Translate We had a party at my friend's condo. to British English
  test('to British, We had a party at my friend\'s condo.', (done) => {
    let translation = translator.americanToBritish("We had a party at my friend's condo.")
    assert.equal(translation[0], "We had a party at my friend's flat.")
    done();
  })
  // Translate Can you toss this in the trashcan for me? to British English
  test('to British, Can you toss this in the trashcan for me?', (done) => {
    let translation = translator.americanToBritish("Can you toss this in the trashcan for me?")
    assert.equal(translation[0], "Can you toss this in the bin for me?")
    done();
  })
  // Translate The parking lot was full. to British English
  test('to british, The parking lot was full', (done) => {
    let translation = translator.americanToBritish("The parking lot was full")
    assert.equal(translation[0], "The car park was full")
    done()
  })
  // Translate Like a high tech Rube Goldberg machine. to British English
  test('to british, Like a high tech Rube Goldberg machine', (done) => {
    let translation = translator.americanToBritish("Like a high tech Rube Goldberg machine.")
    assert.equal(translation[0], "Like a high tech Heath Robinson device.")
    done()
  })
  // Translate To play hooky means to skip class or work. to British English
  test('to british, To play hooky means to skip class or work.', (done) => {
    let translation = translator.americanToBritish("To play hooky means to skip class or work.")
    assert.equal(translation[0], "To bunk off means to skip class or work.")
    done()
  })
  // Translate No Mr. Bond, I expect you to die. to British English
  test('to british, No Mr. Bond, I expect you to die.', (done) => {
    let translation = translator.americanToBritish("No Mr. Bond, I expect you to die.")
    assert.equal(translation[0], "No Mr Bond, I expect you to die.")
    done()
  })
  // Translate Dr. Grosh will see you now. to British English
  test('to british, Dr. Grosh will see you now.', (done) => {
    let translation = translator.americanToBritish("Dr. Grosh will see you now.")
    assert.equal(translation[0], "Dr Grosh will see you now.")
    done()
  })
  // Translate Lunch is at 12:15 today. to British English
  test('to british, Lunch is at 12:15 today.', (done) => {
    let translation = translator.americanToBritish("Lunch is at 12:15 today.")
    assert.equal(translation[0], "Lunch is at 12.15 today.")
    done()
  })
  // Translate We watched the footie match for a while. to American English
  test('to american, We watched the footie match for a while.', (done) => {
    let translation = translator.britishToAmerican("We watched the footie match for a while.")
    assert.equal(translation[0], "We watched the soccer match for a while.")
    done()
  })
  // Translate Paracetamol takes up to an hour to work. to American English
  test('to american, Paracetamol takes up to an hour to work.', (done) => {
    let translation = translator.britishToAmerican("Paracetamol takes up to an hour to work.")
    assert.equal(translation[0], "Tylenol takes up to an hour to work.")
    done()
  })
  // Translate First, caramelise the onions. to American English
  test('to american, First, caramelise the onions.', (done) => {
    let translation = translator.britishToAmerican("First, caramelise the onions.")
    assert.equal(translation[0], "First, caramelize the onions.")
    done()
  })
  // Translate I spent the bank holiday at the funfair. to American English
  test('to american, I spent the bank holiday at the funfair.', (done) => {
    let translation = translator.britishToAmerican("I spent the bank holiday at the funfair.")
    assert.equal(translation[0], "I spent the public holiday at the carnival.")
    done()
  })
  // Translate I had a bicky then went to the chippy. to American English
  test('to american, I had a bicky then went to the chippy.', (done) => {
    let translation = translator.britishToAmerican("I had a bicky then went to the chippy.")
    assert.equal(translation[0], "I had a cookie then went to the fish-and-chip shop.")
    done()
  })
  // Translate I've just got bits and bobs in my bum bag. to American English
  test('to american, I\'ve just got bits and bobs in my bum bag.', (done) => {
    let translation = translator.britishToAmerican("I've just got bits and bobs in my bum bag.")
    assert.equal(translation[0], "I've just got odds and ends in my fanny pack.")
    done()
  })
  // Translate The car boot sale at Boxted Airfield was called off. to American English
  test('to american, The car boot sale at Boxted Airfield was called off.', (done) => {
    let translation = translator.britishToAmerican("The car boot sale at Boxted Airfield was called off.")
    assert.equal(translation[0], "The swap meet at Boxted Airfield was called off.")
    done()
  })
  // Translate Have you met Mrs Kalyani? to American English
  test('to american, Have you met Mrs Kalyani?', (done) => {
    let translation = translator.britishToAmerican("Have you met Mrs Kalyani?")
    assert.equal(translation[0], "Have you met Mrs. Kalyani?")
    done()
  })
  // Translate Prof Joyner of King's College, London. to American English
  test('to american, Prof Joyner of King\'s College, London.', (done) => {
    let translation = translator.britishToAmerican("Prof Joyner of King's College, London.")
    assert.equal(translation[0], "Prof. Joyner of King's College, London.")
    done()
  })
  // Translate Tea time is usually around 4 or 4.30. to American English
  test('to american, Tea time is usually around 4 or 4.30.', (done) => {
    let translation = translator.britishToAmerican("Tea time is usually around 4 or 4.30.")
    assert.equal(translation[0], "Tea time is usually around 4 or 4:30.")
    done()
  })
  // Highlight translation in Mangoes are my favorite fruit.
  test('highlight, mangoes are my favorite fruit', (done) => {
    let translation = translator.americanToBritish("Mangoes are my favorite fruit.")
    assert.equal(translation[1], 'Mangoes are my <span class="highlight">favourite</span> fruit.')
    done();
  })
  // Highlight translation in I ate yogurt for breakfast.
  test('highlight, I ate yogurt for breakfast.', (done) => {
    let translation = translator.americanToBritish("I ate yogurt for breakfast.")
    assert.equal(translation[1], 'I ate <span class="highlight">yoghurt</span> for breakfast.')
    done();
  })
  // Highlight translation in We watched the footie match for a while.
  test('highlight, We watched the footie match for a while.', (done) => {
    let translation = translator.britishToAmerican("We watched the footie match for a while.")
    assert.equal(translation[1], 'We watched the <span class="highlight">soccer</span> match for a while.')
    done()
  })
  // Highlight translation in Paracetamol takes up to an hour to work.
  test('highlight, Paracetamol takes up to an hour to work.', (done) => {
    let translation = translator.britishToAmerican("Paracetamol takes up to an hour to work.")
    assert.equal(translation[1], '<span class="highlight">Tylenol</span> takes up to an hour to work.')
    done()
  })
});
