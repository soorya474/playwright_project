function findDuplicates(str) {
  
    const duplicateChars = [];
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      
      // If we've already recorded this character as a duplicate, skip it.
      if (duplicateChars.indexOf(currentChar) !== -1) {
        continue;
      }
      
      let count = 0;
      
      // Count how many times currentChar appears in the string
      for (let j = 0; j < str.length; j++) {
        if (str[j] === currentChar) {
          count++;
        }
      }
      
      // If the character appears more than once, add it to duplicateChars array
      if (count > 1) {
        duplicateChars.push(currentChar);
      }
    }
    
    return duplicateChars;
  }
