function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".chapter-list li a")
    const data = [];
    for (var i = el.length; i--;) {
        var e = el.get(i);
        data.push({
            name: e.select('.chapter-title').text(),
            url: e.attr("href"),
            host: "https://mangabuddy.com"
        })
    }

    return Response.success(data);
}