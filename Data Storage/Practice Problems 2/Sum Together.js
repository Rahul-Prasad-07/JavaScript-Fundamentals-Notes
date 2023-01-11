function sumTogether(arr1, arr2) {
    let newArr = [];

    for(let p = 0; p < arr1.length; p++) {
        const sum = arr1[p] + arr2[p];
        newArr.push(sum);
    }

    return newArr;
}

module.exports = sumTogether;