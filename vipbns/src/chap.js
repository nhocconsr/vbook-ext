function execute(url){
    var browser = Engine.newBrowser();
    browser.launch(url, 5000);
    browser.callJs("var authorization = window.localStorage.getItem('user'); var auth = document.createElement('auth'); auth.innerHTML = authorization; document.body.appendChild(auth);", 100);
    let auth = browser.html().select("auth").text();
    browser.close();
    if(auth){
        let token = JSON.parse(auth).token;
        const chapId = url.split(/[/.]+/)[8];
        let response = fetch('https://api.bachngocsach.com/api/chapter/'+chapId, {
            method: 'GET',
            headers: {
                authorization: 'Bearer '+token,
            }
        });
        if(response.ok){
            const data = response.json() 
            var content = data.chapter.content.replace(/<!-- (.*?) -->/gm, '')
            .replace(/<p(.*?)>(.*?)<?p>/g, '')
            .replace(/\n/g,'<br>');
            return Response.success(content);
        }
    }else{
        return Response.success('Đây là chương mất tiền hoặc bạn chưa đăng nhập nick vào web bằng vbook. Đăng nhập rồi load lại nhé!');
    }
}