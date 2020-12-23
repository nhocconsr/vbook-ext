function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + "&page=" + page).html();

    var next = doc.select(".pagination_wrap").select("a.current + a").text()

    const el = doc.select("div.card-body .thumb-item-flow")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".series-title a").first().text(),
            link: e.select(".series-title a").first().attr("href"),
            cover: e.select(".a6-ratio div").first().attr("data-bg"),
            description: e.select(".thumb-detail a").first().text(),
            host: "https://truyentranhlh.net"
        })
    }

    return Response.success(data, next)
}