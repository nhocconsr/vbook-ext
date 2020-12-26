function execute(url, page) {
    if (!page) page = '0';
    const doc = Http.get(url + '&page=' + page).html();

    var next = doc.select(".page").select("a:has(span.next)").attr("href").split('=')[2];;

    const el = doc.select(".genre-content > .items a");

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".content-title").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select(".content-image img").first().attr("src"),
            description: e.select(".open-episode-count").first().text().replace('Cập nhật đến c', 'C'),
            host: "https://mangatoon.mobi"
        })
    }

    return Response.success(data, next)
}