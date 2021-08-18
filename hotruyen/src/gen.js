function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url).params({
        pg : page,
        o : 'udate',
    }).html()

    var next = doc.select(".pagination").select("li.active + li").text()

    const el = doc.select("#newupdate .uitem")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".title").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("img").first().attr("data-src"),
            description: e.select(".author").first().text(),
            host: "https://hotruyen.com"
        })
    }

    return Response.success(data, next)
}