load('crypto.js');
function execute(url) {
    const options = {
        method: 'GET',
        headers: {
            authority: 'api.viptruyenfull.com',
            accept: 'application/json, text/plain, */*',
            'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
            'if-none-match': 'W/^\^19389-+X9xMHwkfgTQ8bpE6B9UfTuDdTA^^',
            origin: 'https://viptruyenfull.com',
            referer: 'https://viptruyenfull.com/xuyen-nhanh-vinh-hoa-phu-quy/chuong-5054/',
            'sec-ch-ua': '^\^Not.A/Brand^^;v=^\^8^^, ^\^Chromium^^;v=^\^114^^, ^\^Microsoft',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '^\^Windows^^',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.79'
        }
        };

    let res = fetch('https://api.viptruyenfull.com/api/v1/chapters/get-chapter/xuyen-nhanh-vinh-hoa-phu-quy/5054', options).json().data.content;
    return Response.success(getDecryptedCode(res))
    // var browser = Engine.newBrowser();
    // browser.launch(url, 5000);
    // browser.callJs("var authorization = window.localStorage.getItem('auth._token.local'); var auth = document.createElement('auth'); auth.innerHTML = authorization; document.body.appendChild(auth);", 100);
    // let auth = browser.html().select("auth").text();
    // browser.close();
    // if(auth){
    //     let n = url.split('/')[3];
    //     let c = url.split('-').pop();
    //     let base = 'https://tienvuc.vn/api/reading/'+n+'/chapters/'+c+'/content';
    //     var getc = fetch(base,{
    //         method : "GET",
    //         headers : {
    //             Authorization: auth,
    //         }
    //     });
    //     let text = getc.text();
    //     var content = getDecryptedCode(text);
    //     return Response.success(content);
    // }else{
    //     return Response.success('Để đọc được truyện trên web này bạn cần đăng nhập tài khoản vào trình duyệt của vbook nhé!');
    // }
}
function getDecryptedCode(text) {
    var key = CryptoJS.enc.Utf8.parse('j4DSfugdAASCKEwAAAD8xGX0qEeHh-WJzRc11TBp&%#%$2');
    var iv = CryptoJS.enc.Hex.parse(text.slice(0, 32));
    var ciphertext = CryptoJS.enc.Hex.parse(text.slice(32));
    var encryptedCP = CryptoJS.lib.CipherParams.create({ciphertext: ciphertext,formatter: CryptoJS.format.OpenSSL});
    var decryptedWA = CryptoJS.AES.decrypt(encryptedCP, key, {iv: iv});
    var decryptedUtf8 = decryptedWA.toString(CryptoJS.enc.Utf8);
    return decryptedUtf8;
}