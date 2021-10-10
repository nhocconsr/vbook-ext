function execute(url) {
    var browser = Engine.newBrowser();
    browser.launch(url, 10000) ;
    var doc = browser.html();
    browser.close();
    var el = doc.select(".list_chapter a");
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://cmangatop.com"
        })
    }
    return Response.success(data);
}
