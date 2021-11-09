// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabet = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', '(i/j)',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z', ' '
  ];
  
  const polybiusSquare = [
    '11', '21', '31', '41', '51',
    '12', '22', '32', '42', '52',
    '13', '23', '33', '43', '53',
    '14', '24', '34', '44', '54',
    '15', '25', '35', '45', '55',
    '16'
  ];

  function polybius(input, encode = true) {
    // Encode
    if (encode) {
      let encode = '';
      // Converts uppercase to lowercase
      const stringArray = input.toLowerCase().split('');

      stringArray.forEach((letter) => {
        // i and j will equal 42
        if(letter === 'i' || letter === 'j') return encode += '42';
        let code = alphabet.indexOf(letter);
        
        encode += polybiusSquare[code];
      });

      // Replaces 16 into a space
      return encode.replace(/16/g,' '); 
    }

    // Decode
    if (encode === false) {
      // Verifies if it is even
      if((input.replace(/\s/g,'')).length % 2 === 1) return false;
      let decode = '';
      // Replaces spaces in a string with a 2 digit number
      // Splits a string into pairs
      const stringArray = input.replace(/\s/g, 16).match(/\d{1,2}/g);

      stringArray.forEach((code) => {
        let letter = polybiusSquare.indexOf(code);

        decode += alphabet[letter];
      });

      return decode;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
