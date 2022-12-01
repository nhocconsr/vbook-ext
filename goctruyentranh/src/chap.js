function execute(url) {
    var browser = Engine.newBrowser();
    browser.launch(url, 10000);
    //browser.callJs("var authorization = window.localStorage.getItem('Authorization'); var auth = document.createElement('auth'); auth.innerHTML = authorization; document.body.appendChild(auth);", 100);

    let doc = browser.html();
    //var auth = doc.select("auth").text();
    browser.close();
    //check chapter
    var imgs = [];
    var el = doc.select(".viewer img");
    el.forEach ( e => {
        imgs.push(e.attr("src"));
    })
    return Response.success(imgs);
}