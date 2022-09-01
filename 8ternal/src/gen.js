function execute(url, page) {
    const doc = Http.get(url + '?page=' + page).html()
    var el = doc.select('.container .row .flex-wrap-movielist .movie-item-style-2 ')
    var next = doc.select(".pagination2 a.active + a").text()
    var data = []
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h6").first().text(),
            link: e.select("a").first().attr("href"),
            cover: 'https://comic.8ternal.com.vn/' + e.select(" img").first().attr("src"),
            description: null,
            host: "https://comic.8ternal.com.vn"
        });
    }
    return Response.success(data,next)
}