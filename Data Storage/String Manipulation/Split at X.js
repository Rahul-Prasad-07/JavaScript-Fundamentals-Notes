function splitAtX(string) {
    const index = string.indexOf("x");

    let l = string.slice(0,index);
    let m = string.slice(index+1);

    if(l.length>m.length){
        return l;
    }
    return m;

}

module.exports = splitAtX;