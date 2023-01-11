function isPalindrome(string) {

    return string == reverse(string);

}

function reverse(string){
    let rev ='';
    for(p=string.length-1; p>=0; p--){
        rev += string[p];
    }

    return rev
}

module.exports = isPalindrome;