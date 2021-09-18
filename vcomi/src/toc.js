function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".list-chapters a")
    const data = [];
    for (var i = el.length; i--;) {
        var e = el[i];
        data.push({
            name: e.select('.chapter-name').text(),
            url: e.attr("href"),
            host: "https://vcomi.co"
        })
    }
    return Response.success(data);
}