function execute(key) {
    const doc = Http.get('https://yocomic.com/?s='+ key +'&post_type=wp-manga').html();
    const el = doc.select(".search-wrap .c-tabs-item__content")
    const data = []
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3").text(),
            link: e.select("a").first().attr("href"),
            cover: e.select(".c-image-hover img").first().attr("src"),
            description: e.select(".post-content").first().text(),
            host: "https://yocomic.com"
        })
    }

return Response.success(data)
}