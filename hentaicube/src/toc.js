load('config.js');
function execute(url) {
    var doc = fetch(url).html();
    var el = doc.select("ul.version-chap > li > a")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: e.attr("href"),
            host: BASE_URL
        })
    }

    return Response.success(data);
}