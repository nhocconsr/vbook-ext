function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select(".ul-list-chaper-detail-commic li a")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select("h3").text(),
            url: e.attr("href"),
            host: "https://vlogtruyen.net"
        })
    }

    return Response.success(data);
}