
const reverseString = function(string) {
    let newString='';
    for (let n=string.length-1; n>=0; n--){
        newString+=string.charAt(n);
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
