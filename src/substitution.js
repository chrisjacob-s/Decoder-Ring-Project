// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const letterAlphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ];

  // Helper function
  // Finds any duplicate characters
  function duplicateCharacters(string) {
    // Splits string into separate characters
    let characterArray = string.split('');
    // Puts duplicate characters in array
    return characterArray.filter((character, index, self) => self.indexOf(character) !== index);
  }
  
  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length !== 26) return false;
    // If array exceeds 0 return false
    if(duplicateCharacters(alphabet).length > 0) return false;
    
    // Ignores capitals
    const codeAlphabet = alphabet.toLowerCase().split(''); 
    const inputArray = input.toLowerCase().split(''); 
  
    // Encode
    if (encode) {
      let encode = '';
      inputArray.forEach(letter => {
        // Maintains spaces
        if (letter === ' ') return encode += letter; 
        let code = letterAlphabet.indexOf(letter);

        encode += codeAlphabet[code];
      });

      return encode;
    }
    
    // Decode
    if (encode === false) {
      let decode = '';
      inputArray.forEach(letter => {
        // Maintains spaces
        if (letter === ' ') return decode += letter;
        let code = codeAlphabet.indexOf(letter);

        decode += letterAlphabet[code];
      });

      return decode;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
