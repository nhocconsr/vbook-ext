function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select("#tab-chapper a")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: e.attr("href"),
            host: "https://klmanga.com"
        })
    }

    return Response.success(data);
}