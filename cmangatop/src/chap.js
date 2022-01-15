load('crypto.js');
function execute(url) {
    const chapID = url.split('/').pop();
    let data = decrypt_data(fetch('https://cmangaka.com/api/chapter_content?opt1='+chapID).text())
    let chapter_content = JSON.parse(data)[0].content
    return Response.success(chapter_content);
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