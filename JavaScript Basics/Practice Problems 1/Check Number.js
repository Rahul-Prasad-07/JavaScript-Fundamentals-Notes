function checkNumber(num) {

    if(num<0){
        return 'negative';
    }if(num >0){
        return 'positive';
    }else{
        return 'zero';
    }

}

module.exports = checkNumber;