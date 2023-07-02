load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    const doc = fetch(url + "/page" + page).html();
    var next = doc.select(".wp-pagenavi").select("span.current + a").text()
    const el = doc.select("div.page-item-detail")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        let img = e.select("a img").first().attr("data-src") || e.select("a img").first().attr("src");
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("a").first().attr("href"),
            cover: img,
            description: e.select(".chapter a").first().text(),
            host: BASE_URL
        })
    }
    return Response.success(data, next)
}