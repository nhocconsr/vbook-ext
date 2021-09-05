function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get('https://novelbuddy.com/search').params({q : key,page: page}).html();

    var next = doc.select(".paginator").select("a.active + a").text()

    const el = doc.select(".list .book-item")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("img").first().attr("data-src").replace('//','https://'),
            description: e.select(".latest-chapter").first().text(),
            host: "https://novelbuddy.com"
        })
    }

    return Response.success(data, next)
}