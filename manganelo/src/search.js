function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get("https://manganelo.com/search/story/"+key).params({"page": page}).html()

    var next = doc.select(".group-page").select("a.page-blue + a").get(1).text();

    const el = doc.select(".panel-search-story .search-story-item")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".item-author").text(),
            host: "https://manganelo.com"
        })
    }

    return Response.success(data, next)
}