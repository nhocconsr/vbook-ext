load("crypto.js");
load("base64.js");
function execute(url){
    function decrypt(e){var t=e.content,r=e.keys,o=e.keys.length,s=e.accessKey.split(""),n=s.length,a=new Array;for(a.push(r[s[n-1].charCodeAt(0)%o]),a.push(r[s[0].charCodeAt(0)%o]),i=0;i<a.length;i++){t=base64().decode(t);var p=a[i],c=base64().encode(t.substr(0,16)),S=base64().encode(t.substr(16)),y=CryptoJS.format.OpenSSL.parse(S);t=CryptoJS.AES.decrypt(y,CryptoJS.enc.Base64.parse(p),{iv:CryptoJS.enc.Base64.parse(c),format:CryptoJS.format.OpenSSL}),i<a.length-1&&(t=t.toString(CryptoJS.enc.Base64),t=base64().decode(t))}return t.toString(CryptoJS.enc.Utf8)}
    const chapId = url.match(/\d+/)[0];
    var checkPay = url.match('vip');
    Console.log(checkPay)
    if(checkPay === null){
        var getKey = Http.post('https://www.ciweimao.com/chapter/ajax_get_session_code').headers({
            "Referer": url
            }).params({
                "chapter_id": chapId,
            }).string();
        var access_key = JSON.parse(getKey).chapter_access_key
        var json = Http.post('https://www.ciweimao.com/chapter/get_book_chapter_detail_info').headers({
            "Referer": url
        }).params({
            "chapter_id" : chapId,
            "chapter_access_key" : access_key
        }).string();
        var data = JSON.parse(json);
        var html = decrypt({
                "content": data.chapter_content,
                "keys": data.encryt_keys,
                "accessKey": access_key
            }).replace(/<[^>]*>?/gm, '')
            .replace(/2fRUR2/g, '')
            .replace(/\n/gi, "<br>");
        return Response.success(html);
    }else{
        var html = 'Đây là chương VIP. Nếu muốn đọc mời bạn mua trên web để đọc ^^! <br>Vì mình không có VIP nên không rõ có load được chương VIP đã mua không!<br> Nếu bạn đã mua chương mà không đọc được có thể liên hệ qua email : Phamgiavang@gmail.com'
        return Response.success(html);
    }
}
