function startsWithX(string) {

    let first ="x";
    let second = "X";

    if(string.charAt(0)==first|| string.charAt(0)==second){
        return true;
    }if (string[0] != first & string[0] != second){
        return false;
    }

}

module.exports = startsWithX;