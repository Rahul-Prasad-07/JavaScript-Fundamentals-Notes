function unique(array) {

    let newArray = [];
    for(let i=0; i<array.length; i++){
        const element = array[i];
        if(newArray.indexOf(element) == -1){
            newArray.push(element);
        }
    }
    return newArray;

}

module.exports = unique;