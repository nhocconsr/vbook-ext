function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '/page/'+page).html()

    var next = doc.select(".pagination").select("li.active + li").text()

    const el = doc.select(".theloai-thumlist > li")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h2 a").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("a img").first().attr("data-src"),
            description: e.select(".content p span").get(1).text(),
            host: "https://truyenwiki.com"
        })
    }

    return Response.success(data, next)
}