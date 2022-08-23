function execute(key) {
    const doc = Http.get('https://baotangtruyenhot.com/tim-truyen?keyword='+ key).html();
    var el = doc.select('.container .row .row .item')
    var data =[]
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select("a img").first().attr("data-src"),
            description: e.select(".chapter ").first().text(),
            host: "https://baotangtruyenhot.com"
        })
    }

return Response.success(data)
}