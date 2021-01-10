function execute(key, page) {
    const doc = Http.get('https://thichtruyen.vn/site/search').params({
        key_word : key,
        page : page
    }).html()
    var next = doc.select('ul.pagination').select('li:has(a.active) + li').text();

    const el = doc.select(".view-category-item")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3.view-category-item-title").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select(".view-category-item-image img").first().attr("src"),
            description: e.select(".view-category-item-author a").first().text(),
            host: "https://thichtruyen.vn"
        })
    }
    return Response.success(data,next)
}