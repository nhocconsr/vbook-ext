function execute(url) {
    var doc = Http.get(url).html();

     var el = doc.select(".chapter-list span:nth-child(1) > a")
    const data = [];
    for (var i = el.size() - 1; i >= 0 ; i--) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://vietcomic.net"
        })
    }

    return Response.success(data);
}