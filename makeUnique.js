// Write your solution below:
function makeUnique(inputStr) {
    const uniqueChars = [];
    const seenChars = new Set();

    for (const char of inputStr) {
        if (!seenChars.has(char)) {
            uniqueChars.push(char);
            seenChars.add(char);
        }
    }
    return uniqueChars.join('');
}


console.log(makeUnique('thisisastring'))