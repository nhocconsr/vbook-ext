function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select("#list dd a")
    const data = [];
    for (var i = 12;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: 'https://www.20xs.org'+e.attr("href"),
            host: "https://www.20xs.org"
        })
    }

    return Response.success(data);
}