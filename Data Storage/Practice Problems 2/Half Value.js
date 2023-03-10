function halfValue(numbers) {
    const newArr = [];
    
    for(let i = 0; i < numbers.length; i++) {
        newArr[i] = Math.round(numbers[i] / 2);
    }

    return newArr;
}

module.exports = halfValue;