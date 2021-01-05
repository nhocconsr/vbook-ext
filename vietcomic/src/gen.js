function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '&page='+page).html();

    var next = doc.select(".phan-trang").select("a.pageselect + a").text();

    const el = doc.select(".leftCol .list-truyen-item-wrap");

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".lastChapter").text(),
            host: "https://vietcomic.net"
        })
    }

    return Response.success(data, next)
}