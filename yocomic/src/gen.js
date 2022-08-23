function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '/page/'+ page).html();
    const next = doc.select(".paging-navigation .float-left a").attr('href').split('/')[6]
    const el = doc.select(".page-content-listing .page-listing-item .row .badge-pos-2")
    size = el.size()
    const data = [];
    for (var i = 0; i < size; i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3").text(),
            link: e.select("a").first().attr("href"),
            cover: e.select(".c-image-hover img").first().attr("src"),
            description: e.select(".chapter-item ").first().text(),
            host: "https://yocomic.com"
        })
    }
    return Response.success(data,next)
}