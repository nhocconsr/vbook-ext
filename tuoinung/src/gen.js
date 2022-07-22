function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '/page/'+ page).html();
    var next = doc.select(".wp-pagenavi a.page.larger").first().text()
    const el = doc.select(".listpost .row .col-md-12")
    size = el.size()
    const data = [];
    for (var i = 0; i < size; i++) {
        var e = el.get(i);
        data.push({
            name: e.select(" .news-desc h2").text(),
            link: e.select(".news-desc a").attr("href"),
            cover: e.select(".news-image img").attr("src"),
            description: e.select(".desc").text(),
            host: "https://tuoinung.com"
        })
    }
    return Response.success(data,next)
}