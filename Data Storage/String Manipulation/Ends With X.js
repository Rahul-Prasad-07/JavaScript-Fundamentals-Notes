function endsWithX(string) {

    if(string[string.length - 1].toLowerCase() === "x"){
        return true;
    }
    return false;

}

module.exports = endsWithX;