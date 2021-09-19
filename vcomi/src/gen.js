function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://vcomi.co/manga-list.html').params({
        listType : 'pagination',
        page : page,
        sort : 'last_update',
        sort_type: 'DESC'
    }).html();

    var next = doc.select(".pagination").select("li:has(a.active) + li").text()
    const el = doc.select(".card-body .thumb-item-flow")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".series-title a").first().text(),
            link: e.select(".series-title a").first().attr("href"),
            cover: e.select(".content").first().attr("data-bg"),
            description: e.select(".chapter-title").text(),
            host: "https://vcomi.co"
        })
    }
    return Response.success(data, next)
}