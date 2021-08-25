function execute(url) {
    var browser = Engine.newBrowser();
    browser.launch(url, 5000);
    var doc = browser.html();
    browser.close();
    return Response.success({
        name: doc.select(".info-name").first().text(),
        cover: doc.select(".page-header-img").first().attr("src").replace('//','https://'),
        author: doc.select(".info-author").first().text(),
        description: doc.select(".abstract-content-text").first().text(),
        detail: doc.select(".category-list").first().html(),
        host: "https://fanqienovel.com",
    });
}