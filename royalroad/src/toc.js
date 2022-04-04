function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select(".portlet-body .chapter-row")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").first().text(),
            url: e.select("a").attr("href"),
            host: "https://www.royalroad.com"
        })
    }

    return Response.success(data);
}