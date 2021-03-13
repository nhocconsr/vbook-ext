function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select("#dsc ul.listchap > li a")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://truyenwiki.com"
        })
    }

    return Response.success(data);
}