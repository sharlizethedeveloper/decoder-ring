// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (alphabet === undefined || alphabet.length !== 26) return false;
    if (/(.).*\1/.test(alphabet) === true) return false;
    let regAph = "abcdefghijklmnopqrstuvwxyz"
    let result = "";
    if (encode) {
      for (let i = 0; i < input.length; i++){
        let value = regAph.indexOf(input[i]);
        let space = alphabet[value];
        if (space === undefined){
          space = " "
        }
        result = result + space;
      }
    } else {
      for (let i = 0; i < input.length; i++){
        let value = alphabet.indexOf(input[i]);
        let space = regAph[value]; 
        if (space === undefined){
          space = " "
        }
        result = result + space;
      }
    }
    return result;
    /*
    standard alphabet, substitution alphabet
    letters will substituted from one alphabet to another
    works for encoding and decoding
    three parameters are the input, substituted alphabet and encode set to true by default
    spaces and special characters to remain when coding
    ignore capital letters, .toLowerCase()
    length should be 26
    */
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
