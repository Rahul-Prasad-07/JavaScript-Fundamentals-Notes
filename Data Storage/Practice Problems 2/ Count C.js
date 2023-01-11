function countC(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === "c") {
            count++;
        }
    }

    return count;
}

module.exports = countC;