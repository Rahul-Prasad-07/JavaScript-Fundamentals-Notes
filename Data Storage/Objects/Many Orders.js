const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {

    let accumulatePizaa=0;

    for(let p=0; p<orders.length; p++){
        if(orders[p].type == ORDER_TYPES.PIZZA){
            accumulatePizaa += orders[p].pizzas;

        }

    }
    return accumulatePizaa;

}

module.exports = numberOfPizzas;