// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    // If encode is false, inverts shift
    if (encode === false) shift *= -1;
    // If shift is negative, wraps back around the alphabet
    if (shift < 0) return caesar(input, shift + 26);

    // String placeholder
    let result = "";

    for (let char in input) {
      let character = input[char];
      
      // Checks if the string has uppercase or lowercase letters
      // Returns special characters as is
      if (character.match(/[A-Za-z]/g)) {
        let encoding = input.charCodeAt(char);
        
        // Uppercase letters
        if (encoding >= 65 && encoding <= 90) {
          // Accesses the UTF-16 code units
          // Access to code units 65-90
          character = String.fromCharCode(((encoding - 65 + shift) % 26) + 65);
        }
        // Lowercase letters
        else if (encoding >= 97 && encoding <= 122) {
          // Access to code units 97-122
          character = String.fromCharCode(((encoding - 97 + shift) % 26) + 97);
        }
      }

      // Puts characters together
      // Converts letter to lowercase
      result += character.toLowerCase();
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
