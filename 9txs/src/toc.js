function execute(url) {
    var doc = Http.get(url.replace('.html','')).html();

    var el = doc.select(".read dd a")
    const data = [];
    for (var i = 12;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: 'https://9txs.org'+e.attr("href"),
            host: "https://9txs.org"
        })
    }

    return Response.success(data);
}