load('config.js');
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
            cover: BASE_URL + e.select(" img").first().attr("src"),
            description: null,
            host: BASE_URL
        });
    }
    return Response.success(data,next)
}