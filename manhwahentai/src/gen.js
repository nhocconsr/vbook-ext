function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + "/" + page).html();

    var next = doc.select(".wp-pagenavi").select("span.current + a").text()

    const el = doc.select("div.page-item-detail")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("a img").first().attr("src"),
            description: e.select(".chapter a").first().text(),
            host: "https://manhwahentai.me "
        })
    }

    return Response.success(data, next)
}