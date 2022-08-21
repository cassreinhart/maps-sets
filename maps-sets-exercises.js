//QQ1 return Set (4) {1, 2, 3, 4}

//QQ2 return 'ref'

//QQ3 {[1, 2, 3] => true, [1, 2, 3] => false}

function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

function isVowel(char) {
    return 'aeiou'.includes(char);
}

function vowelCount(str) {
    const vowelMap = new Map();
    
    for (let char of str) {
        let lowerCased = char.toLowerCase();
        if(isVowel(lowerCased)){
            if (vowelMap.has(lowerCased)){
                vowelMap.set(lowerCased, vowelMap.get(lowerCased) + 1);
            } else {
                vowelMap.set(lowerCased, 1);
            }
        }
    }
    return vowelMap;
}