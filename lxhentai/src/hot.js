function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://lxhentai.com/story/index.php?p='+page+'&hot').html();

    var next = doc.select(".pagination").select("li.active + li").text()

    const el = doc.select(".col-md-8 .row > .py-2")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").last().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select(".py-2 > div").first().attr("style").split("'")[1],
            description: e.select(".newestChapter a").first().text(),
            host: "https://lxhentai.com"
        })
    }

    return Response.success(data, next)
}