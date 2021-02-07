function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url).params({page:page}).html()
	var next = doc.select('ul.pagination').select('li.active + li').text();

    const el = doc.select(".list-new .row")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".col-title h3").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select(".thumb img").first().attr("src").replace('-thumbw',''),
            description: e.select(".chapter-text").first().text(),
            host: "https://123truyen.com"
        })
    }
    return Response.success(data, next)
}