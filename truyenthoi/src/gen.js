function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '/page/' + page).html()

    var next = doc.select(".pagination").select("li.active + li").text()

    const el = doc.select(".list .home-truyendecu")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".caption h3").first().text(),
            link: e.select(".caption a").first().attr("href"),
            cover: e.select(".each_truyen img").first().attr("src"),
            description: e.select(".chapter-name").first().text(),
            host: "https://truyenthoi.net"
        })
    }

    return Response.success(data, next)
}