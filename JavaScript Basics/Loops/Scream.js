function scream(n) {
    let str ="";

    for(let i=0; i<n; i++){

        if(i%2 ==0){
            str +="a";
        }else {
            str+="A";
        }
    }
    return str;
}

module.exports = scream;