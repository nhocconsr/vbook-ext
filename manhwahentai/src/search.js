function execute(key, page) {
    if (!page) page = '1';
    const url = 'https://manhwahentai.me/page/';
    const doc = Http.get(url + page +'/?s='+ key +"&post_type=wp-manga").html()

    var next = doc.select(".wp-pagenavi").select("span.current + a").text()

    const el = doc.select("div.c-tabs-item__content")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select(".tab-thumb img").first().attr("src"),
            description: e.select(".chapter a").first().text(),
            host: "https://manhwahentai.me"
        })
    }

    return Response.success(data, next)
}