function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url+'/page-'+page).html();
    var next = doc.select("ul.pageNav-main").select("li.pageNav-page--current + li").first().text();
    const el = doc.select(".structItem")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".structItem-title a[href~=threads]").first().text(),
            link: e.select(".structItem-title a[href~=threads]").first().attr("href"),
            cover: e.select(".cover img").first().attr("src"),
            description: e.select(".author").first().text(),
            host: "https://vietwriter.vn"
        })
    }
    return Response.success(data, next)
}