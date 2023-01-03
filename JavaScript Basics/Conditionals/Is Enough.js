function isEnough(cost, money) {

    if(money > cost){
        return true;
    }if(money < cost){
        return false;
    }else {
        return true;
    }

}

module.exports = isEnough;