function execute(url) {
    const getInfo = Http.get(url).html()
    const storyId = getInfo.select(".rating-post-id").first().attr("value")
    var doc = Http.post('https://hentaidexy.com/wp-admin/admin-ajax.php').params({
        "action": "manga_get_chapters",
        "manga": storyId
    }).html();
    doc.select('.chapter-release-date').remove();
    var el = doc.select("li.wp-manga-chapter a")
    const list = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        list.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://hentaidexy.com"
        })
    }

    return Response.success(list);
}