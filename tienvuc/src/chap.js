load('crypto.js');
function execute(url) {
    var text = Http.get(url).string();
    var e = text.slice(0, 32);
    var key = CryptoJS.enc.Utf8.parse('2bd40f62d20c1d49237a109d491974eb');
    var iv  = CryptoJS.enc.Hex.parse(e);
    var ciphertext = CryptoJS.enc.Hex.parse(text.slice(32));
    var decryptedWA = CryptoJS.AES.decrypt({ciphertext: ciphertext}, key, { iv: iv});   
    var content = decryptedWA.toString(CryptoJS.enc.Utf8);
    if (content === '') var content = 'Chương VIP - Vui lòng sử dụng trình duyệt trong Vbook đăng nhập và mua chương nếu bạn muốn đọc chương VIP<br> Nếu đã mua chương mà vẫn có lỗi thì cho mượn nick để test :D'
    return Response.success(content)
}