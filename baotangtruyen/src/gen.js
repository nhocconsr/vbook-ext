function execute(url, page) {
    const doc = Http.get(url+'?status=-1&sort=0&page='+page).html()
    var el = doc.select('.container .row .row .item')
    var next = doc.select('.pagination li.active + li').text()
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
    return Response.success(data,next)
}