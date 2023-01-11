function countVowels(str) {

    let vov = ["a", "e", "i", "o","u"];
    let count =0;
    for(let p=0; p<str.length; p++){
        if (vov.includes(str[p].toLowerCase())) count++;
    }
    return count;

}

module.exports = countVowels;