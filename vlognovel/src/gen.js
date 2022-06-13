function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url).params({page: page}).html();
    var next = doc.select(".pagination").select("li.active + li").text()
    const el = doc.select("ul.novel-list li.novel-item ")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h4.novel-title").text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("figure.novel-cover img").first().attr("data-src"),
            description: e.select(".novel-stats").last().text(),
            host: "https://vlognovel.com"
        })
    }
    return Response.success(data, next)
}