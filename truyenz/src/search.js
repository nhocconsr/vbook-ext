function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.post('https://truyenz.info/wp-admin/admin-ajax.php').params({
        "action": "madara_load_more",
        "page": page,
        "template": "madara-core/content/content-search",
        "vars[s]": key,
        "vars[paged]": "1",
        "vars[template]": "search",
        "vars[post_type]": "wp-manga",
        "vars[post_status]": "publish",
        "vars[manga_archives_item_layout]": "big_thumbnail"
    }).html()

    const el = doc.select(".c-tabs-item__content")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".post-title a").first().text(),
            link: e.select(".post-title a").first().attr("href"),
            cover: e.select(".tab-thumb img").first().attr("data-src"),
            description: e.select(".chapter a").first().text(),
            host: "https://truyenz.info"
        })
    }

    return Response.success(data, parseInt(page) + 1)
}