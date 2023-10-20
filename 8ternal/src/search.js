load('config.js');
function execute(key, page) {
    
    if (!page) page = '1';
    let response = fetch(BASE_URL +'tim-kiem.html/', {
        method: "GET",
        queries: {
            q : key,
            page : page
        }
    });
    if (response.ok) {
        let doc = response.html();
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
        return Response.success(data, next);
    }
    return null;
}