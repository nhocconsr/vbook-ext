function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '/page-' + page).html();
    var next = doc.select(".page-pagination").select("a.next-page").attr('href').split('-')[3];

    const el = doc.select(".manga-list > ul > li")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".manga-info h3").first().text(),
            link: e.select(".manga-info h3 a").first().attr("href"),
            cover: e.select(".manga-thumb img").first().attr("data-original"),
            description: e.select(".chapter a").first().text(),
            host: "https://khotruyentranh.com"
        })
    }

    return Response.success(data, next)
}