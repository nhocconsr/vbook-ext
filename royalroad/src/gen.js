function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url).params({page: page}).html();

    var next = doc.select(".pagination").select("li.page-active + li").text()

    const el = doc.select("#result .fiction-list-item")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h2.fiction-title").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select(".col-sm-2 img").first().attr("src"),
            description: null,
            host: "https://www.royalroad.com"
        })
    }

    return Response.success(data,next)
}
//https://www.royalroad.com/fiction/21220/mother-of-learning