function execute(url, page) {
    const doc = Http.get('https://hitruyen.vip').html()
    var el = doc.select('#loop-content .page-listing-item ')
    var data =[]
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select("a img").first().attr("src"),
            description: e.select(".chapter ").first().text(),
            host: "https://hitruyen.vip"
        })
    }
    return Response.success(data)
}