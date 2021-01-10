function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select("#tab-chapper ul > li a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: e.attr("href"),
            host: "https://thichtruyen.vn"
        })
    }

    return Response.success(data);
}