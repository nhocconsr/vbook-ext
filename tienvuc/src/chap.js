load('crypto.js');
function execute(url) {
    let n = url.split('/')[3];
    let c = url.split('-').pop();
    let base = 'https://api.tienvuc.vip/reading/'+n+'/chapters/'+c+'/content';
    var getc = fetch(base);
    let text = getc.text();
    var content = getDecryptedCode(text);
    if (content === '') var content = 'Chương VIP - Vui lòng sử dụng trình duyệt trong Vbook đăng nhập và mua chương nếu bạn muốn đọc chương VIP<br> Nếu đã mua chương mà vẫn có lỗi thì cho mượn nick để test :D'
    return Response.success(content);
}
function getDecryptedCode(text) {
    var key = CryptoJS.enc.Utf8.parse('2bd40f62d20c1c49237a109d491974eb');
    var iv = CryptoJS.enc.Hex.parse(text.slice(0, 32));
    var ciphertext = CryptoJS.enc.Hex.parse(text.slice(32));
    var encryptedCP = CryptoJS.lib.CipherParams.create({ciphertext: ciphertext,formatter: CryptoJS.format.OpenSSL});
    var decryptedWA = CryptoJS.AES.decrypt(encryptedCP, key, {iv: iv});
    var decryptedUtf8 = decryptedWA.toString(CryptoJS.enc.Utf8);
    return decryptedUtf8;
}