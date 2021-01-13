function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url).params({page: page}).html();
    var next = doc.select(".pagination").select("li.active + li").text()
    const el = doc.select(".content .card-list > .card")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".card-title a").first().text(),
            link: e.select(".card-title a").first().attr("href"),
            cover: e.select("img.card-img").first().attr("src"),
            description: e.select(".list-chapter > li:nth-child(1) a").first().text(),
            host: "https://truyentranh.net"
        })
    }

    return Response.success(data, next)
}