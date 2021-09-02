function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get('https://hentaidexy.com/page/'+page).params({
        s : key,
        post_type : 'wp-manga',
    }).html();
    var next = doc.select(".nav-previous a").attr("href").match(/\d+/)[0];
    const el = doc.select(".tab-content-wrap .row")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".chapter").first().text(),
            host: "https://hentaidexy.com"
        })
    }

    return Response.success(data, next)
}