//https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}

function decrypt_data(data) {
    var parsed = JSON.parse(data);
    var type = parsed.ciphertext;
    var score = CryptoJS.enc.Hex.parse(parsed.iv);
    var lastviewmatrix = CryptoJS.enc.Hex.parse(parsed.salt);
    var adjustedLevel = CryptoJS.PBKDF2("nettruyenhayvn", lastviewmatrix, {
        "hasher": CryptoJS.algo.SHA512,
        "keySize": 64 / 8,
        "iterations": 999
    });
    var queryTokenScores = {};
    queryTokenScores["iv"] = score;
    var pixelSizeTargetMax = CryptoJS.AES.decrypt(type, adjustedLevel, queryTokenScores);
    return pixelSizeTargetMax.toString(CryptoJS.enc.Utf8);
}