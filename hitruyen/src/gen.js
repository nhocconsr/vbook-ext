function execute(url, page) {
    const doc = Http.get(url).html()
    var el = doc.select('.c-page__content .tab-content-wrap .page-listing-item .col-12 ')
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