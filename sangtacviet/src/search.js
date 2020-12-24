function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get('https://sangtacviet.com/?find=&findinname='+key+'&minc=0&tag=&p='+page).html()

    var next = doc.select(".pagination").select("li.active + li").text()

    const el = doc.select("#searchviewdiv a.booksearch")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".searchbooktitle").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(" div > span.searchtag").last().text(),
            host: "https://sangtacviet.com"
        })
    }

    return Response.success(data, next)
}