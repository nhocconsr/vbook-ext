function execute(url, page) {
    if (!page) page = 0;
    const doc = Http.post('https://truyencool.net/wp-admin/admin-ajax.php').params({
        'action': 'madara_load_more',
        'page': page,
        'template': 'madara-core/content/content-archive',
        'vars[paged]': '1',
        'vars[orderby]': 'meta_value_num',
        'vars[template]': 'archive',
        'vars[sidebar]': 'full',
        'vars[post_type]': 'wp-manga',
        'vars[post_status]': 'publish',
        'vars[meta_key]': '_latest_update',
        'vars[order]': 'desc',
        'vars[meta_query][relation]': 'OR',
        'vars[manga_archives_item_layout]': 'default'
    }).html()
    const data = [];
    var el = doc.select(".page-listing-item .page-item-detail")
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i)
        data.push({
            name: e.select("h3.h5 a").first().text(),
            link: e.select("h3.h5 a").first().attr("href"),
            cover: e.select(".item-thumb img").first().attr("data-src"),
            description: e.select(".list-chapter > div:nth-child(1) a").text(),
            host: "https://truyencool.net"
        })
    }
    if(data.length === 0) var next = null
    else var next = parseInt(page) + 1
    return Response.success(data,next)
}