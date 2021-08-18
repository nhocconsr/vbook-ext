function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select("ul.list-chapter > li a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: e.attr("href"),
            host: "https://truyendich.org"
        })
    }

    return Response.success(data);
}