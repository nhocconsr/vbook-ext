function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select("ul.lst-chapter > li").select("a");
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.text().replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
            url: e.attr("href"),
            host: "http://truyentop1.com"
        })
    }

    return Response.success(data);
}