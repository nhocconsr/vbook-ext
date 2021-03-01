function execute(url) {
    var doc = Http.get(url+'/').html();

    var el = doc.select(".panel-chapterlist dd a")
    const data = [];
    for (var i = 10;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: e.attr("href"),
            host: "http://www.shu05.com"
        })
    }

    return Response.success(data);
}