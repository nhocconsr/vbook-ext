function execute(url) {
    var doc = Http.post(url).html();
    var el = doc.select(".chap-list a")
    const list = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        list.push({
            name: e.select('span').first().text(),
            url: e.attr("href"),
            host: "https://hentaivn.vip"
        })
    }
    return Response.success(list);
}