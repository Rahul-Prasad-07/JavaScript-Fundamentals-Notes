function canAccess(purchasedSubscription, freeTrial) {

    if(purchasedSubscription){
        return true ;
    }else if (freeTrial){
        return true;
    }else {
        return false;
    }

}

module.exports = canAccess;