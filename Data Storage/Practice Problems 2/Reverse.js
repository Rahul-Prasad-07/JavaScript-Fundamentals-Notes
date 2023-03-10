function reverse(string) {
    let rev ='';
    for (let p = string.length-1; p>=0; p--){
         rev += string[p];

    }
    return rev
    
}

module.exports = reverse;