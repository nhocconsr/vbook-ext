load('crypto.js');
function execute(url) {
    let doc = fetch(url).html();
    if (doc.select('#wrap_alertvip').length) {   
        return Response.success(['https://telegraph-image.pages.dev/file/2ad2a15824611e5424775.jpg']);
    }else{
        var sID = doc.select('.content-chap-image');
        sID = /\bgetContentchap\('(.+?)','(.+?)'\)/.exec(sID);
        let response = fetch('https://truyensieuhay.com/Service.asmx/getContentChap', {
            method : 'POST',
            body: '{ sID: "' + sID[1] + '",chuc:"' + sID[2] + '" }'
        });
        if(response.ok){
            let data = JSON.parse(response.json().d);
            var ds = Html.parse(decrypt(data.des, data.id));
            let imgs = [];
            ds.select("img").forEach(e => imgs.push(e.attr("src")));
            return Response.success(imgs);
        }
        return null;
    }
}
function decrypt(des, id) {
    id = id.substring(2, id.length - 3);
    var passphrase = CryptoJS.enc.Utf8.parse(id.toLowerCase());
    var iv = CryptoJS.enc.Utf8.parse('gqLOHUioQ0QjhuvI');
    var decrypted = CryptoJS.AES.decrypt(des, passphrase, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
    });
    var result = decrypted.toString(CryptoJS.enc.Utf8);
    return result;
}