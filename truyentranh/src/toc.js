function execute(url) {
    var doc = Http.get(url).params({order:'asc'}).html();
    var el = doc.select(".chapter-list a")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://truyentranh.net"
        })
    }
    return Response.success(data);
}