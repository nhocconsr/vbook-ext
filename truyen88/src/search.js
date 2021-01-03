function execute(key, page) {
    if (!page) page = '0';
    const doc = Http.get('https://truyen88.net/search').params({
        key : key,
        page: page,
    }).html()
	var next = doc.select('ul.pagination').select('li.active + li').text();

    const el = doc.select(".list-story .row")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".story-name a").first().text(),
            link: e.select(".story-name a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".col-xs-7.col-sm-7.col-md-7.col-lg-7 > p:nth-child(3)").first().text().split('|')[1],
            host: "https://truyen88.net"
        })
    }
    return Response.success(data, next)
}