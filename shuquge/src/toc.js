function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select(".listmain dd a")
    const data = [];
    for (var i = 12;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: url.replace('index.html','')+e.attr("href"),
            host: "http://www.shuquge.com"
        })
    }

    return Response.success(data);
}