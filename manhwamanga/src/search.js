function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get('https://manhwamanga.net/page/'+page).params({s:key}).html();

    var next = doc.select(".pagination").select("li.active + li").text();

    const el = doc.select(".list-thumbnail .home-truyendecu");

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".label-primary").text(),
            host: "https://manhwamanga.net"
        })
    }

    return Response.success(data, next)
}