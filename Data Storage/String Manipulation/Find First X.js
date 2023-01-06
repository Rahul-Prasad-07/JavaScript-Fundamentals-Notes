function findFirstX(string) {
    for(let i=0; i<= string.length; i++){
        let index = string.indexOf('x');
        return index;
    }
    return -1;

}

module.exports = findFirstX;