function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://mangabuddy.com'+url).params({page: page}).html();
    var next = doc.select(".paginator").select("a.active + a").text()
    const el = doc.select(".list .book-detailed-item")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select("img").first().attr("data-src").replace('//','https://'),
            description: e.select(".latest-chapter").first().text(),
            host: "https://mangabuddy.com"
        })
    }

    return Response.success(data, next)
}