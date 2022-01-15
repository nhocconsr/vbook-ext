function execute(url) {
    let browser = Engine.newBrowser();
    browser.launch(url, 10000) ;
    let doc = browser.html();
    browser.close();
    let el = doc.select(".list_chapter a");
    const data = [];
    for (let i = el.size() - 1; i >= 0; i--) {
        let e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://cmangaka.com"
        })
    }
    return Response.success(data);
}
