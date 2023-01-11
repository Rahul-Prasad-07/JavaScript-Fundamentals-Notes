function playerHandScore(hand) {
    const scores = {
        "K": 4,
        "Q": 3,
        "J": 2
    }

    const handArr = hand.split("");
    let sum = 0;
    for(let i = 0; i < handArr.length; i++) {
        const score = scores[handArr[i]];
        sum += score;
    }

    return sum;
}

module.exports = playerHandScore;