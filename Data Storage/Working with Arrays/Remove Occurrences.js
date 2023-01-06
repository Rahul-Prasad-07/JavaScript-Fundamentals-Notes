function removeOccurrences(array, num) {
    for(let p = array.length - 1; p >= 0; p--) {
        if (array[p] === num) {
            array.splice(p, 1);
        }
    }
}

module.exports = removeOccurrences;