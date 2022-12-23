load('crypto.js');
function execute(url) {
    var browser = Engine.newBrowser();
    browser.launch(url, 5000);
    browser.callJs("var authorization = window.localStorage.getItem('auth._token.local'); var auth = document.createElement('auth'); auth.innerHTML = authorization; document.body.appendChild(auth);", 100);
    let auth = browser.html().select("auth").text();
    browser.close();
    if(auth){
        let n = url.split('/')[3];
        let c = url.split('-').pop();
        let base = 'https://tienvuc.vn/api/reading/'+n+'/chapters/'+c+'/content';
        var getc = fetch(base,{
            method : "GET",
            headers : {
                Authorization: auth,
            }
        });
        let text = getc.text();
        var content = getDecryptedCode(text);
        return Response.success(content);
    }else{
        return Response.success('Để đọc được truyện trên web này bạn cần đăng nhập tài khoản vào trình duyệt của vbook nhé!');
    }
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