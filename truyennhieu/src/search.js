function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get('https://truyennhieu.com/tim-kiem?q='+key+'&page=' + page).html()
    
    var next = doc.select(".box-page-view").select("a.active + a").text()
    const el = doc.select(".box-cate-list > ul > li")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select(".img img").first().attr("src"),
            description: e.select(".show-author a").first().text(),
            host: "https://truyennhieu.com"
        })
    }

    return Response.success(data, next)
}