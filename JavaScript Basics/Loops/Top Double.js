function topDouble(value, top) {

    while (value < top) {
        value *= 2;
    }
    return value / 2;
}

module.exports = topDouble;