function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '&page=' + page).html();

    var next = doc.select("ul.pagination").select("li.active + li").text()

    const el = doc.select("table > tbody > tr")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("a").first().attr("data-thumbnail"),
            description: e.select(".text-right").first().text(),
            host: "https://hocvientruyentranh.net"
        })
    }

    return Response.success(data, next)
}