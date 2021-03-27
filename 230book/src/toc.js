function execute(url) {
    var doc = Http.get(url).html('gbk');

    var el = doc.select("ul._chapter li a")
    const data = [];
    for (var i = 0;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: url+'/'+e.attr("href"),
            host: "http://www.230book.com"
        })
    }

    return Response.success(data);
}