function removeSecret(object) {

    delete object.secret;

}

module.exports = removeSecret;