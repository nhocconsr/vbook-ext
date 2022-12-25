function execute(url) {
    var doc = Http.get(url).html();
    const sid = url.match(/\d+/g)[1]
    var el = doc.select("ul.chapterlist a")
    const data = [];
    for (var i = 12;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: 'https://www.69shu.io/book/'+sid+'/'+e.attr("href"),
            host: "https://www.69shu.io"
        })
    }

    return Response.success(data);
}