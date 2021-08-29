function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select(".chapter-list li a")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.attr("title"),
            url: e.attr("href"),
            host: "https://www.manhuagui.com"
        })
    }

    return Response.success(data);
}