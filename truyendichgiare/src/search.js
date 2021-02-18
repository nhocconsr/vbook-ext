function execute(key, page) {
    const doc = Http.get('http://truyendichgiare.com/search?q='+key).html()
    const el = doc.select(".list-truyen .row")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3.truyen-title").first().text(),
            link: e.select("h3.truyen-title a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".chapter-text").first().text(),
            host: "http://truyendichgiare.com"
        })
    }
    return Response.success(data)
}