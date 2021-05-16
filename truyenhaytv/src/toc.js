function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select(".episodes-wrap a")
    const data = [];
    for (var  i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".episode-title").text(),
            url: e.attr("href"),
            host: "https://truyenhaytv.com"
        })
    }

    return Response.success(data);
}