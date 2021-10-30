function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".chapter-item")
    el.select('span').remove();
    const data = [];
    for (var i = el.size() - 1; i>=0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select('a').first().text(),
            url: e.select('a').first().attr("href"),
            host: "https://truyenhaytv.com"
        })
    }
    return Response.success(data);
}