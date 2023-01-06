function isAllX(string) {

    for(let i=0; i<string.length; i++){

        if(string[i].toLowerCase() !== "x"){
            return false;
        }

    }
    return true;


}

module.exports = isAllX;