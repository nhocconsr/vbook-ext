function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '?page=' + page).html();
    var next = doc.select(".pagination li.page-item.active + li ").text()
    const el = doc.select("#box-content #list-posts .row .form-group")
    size = el.size()
    const data = [];
    for (var i = 0; i < size; i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").text(),
            link: e.select("h3 a").attr("href"),
            cover: e.select("img").attr("data-src"),
            description: null,
            host: "https://docsach24.co"
        })
    }
    return Response.success(data,next)
}