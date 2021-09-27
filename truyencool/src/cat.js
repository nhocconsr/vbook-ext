function execute(url, page) {
    const cat = url.split('/').pop();
    if (!page) page = 0;
    const doc = Http.post('https://truyencool.net/wp-admin/admin-ajax.php').params({
        'action': 'madara_load_more',
        'page': page,
        'template': 'madara-core/content/content-archive',
        'vars[wp-manga-genre]': cat,
        'vars[attachment_id]': '0',
        'vars[page_id]': '0',
        'vars[day]': '0',
        'vars[monthnum]': '0',
        'vars[year]': '0',
        'vars[w]': '0',
        'vars[meta_key]': '_latest_update',
        'vars[ignore_sticky_posts]': false,
        'vars[suppress_filters]': false,
        'vars[cache_results]': true,
        'vars[update_post_term_cache]': true,
        'vars[lazy_load_term_meta]': true,
        'vars[update_post_meta_cache]': true,
        'vars[post_type]': 'wp-manga',
        'vars[posts_per_page]': '30',
        'vars[nopaging]': false,
        'vars[comments_per_page]': '50',
        'vars[no_found_rows]': false,
        'vars[taxonomy]': 'wp-manga-genre',
        'vars[term]': 'manhwa',
        'vars[order]': 'desc',
        'vars[orderby]': 'meta_value_num',
        'vars[template]': 'archive',
        'vars[sidebar]': 'full',
        'vars[post_status]': 'publish',
        'vars[meta_query][relation]': 'OR',
    }).html()
    const data = [];
    var el = doc.select(".page-listing-item .page-item-detail")
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i)
        data.push({
            name: e.select("h3.h5 a").first().text(),
            link: e.select("h3.h5 a").first().attr("href"),
            cover: e.select(".item-thumb img").first().attr("data-src"),
            description: e.select(".list-chapter > div:nth-child(1) > span.chapter a").text(),
            host: "https://truyencool.net"
        })
    }
    if(data.length === 0) var next = null
    else var next = parseInt(page) + 1
    return Response.success(data,next)
}