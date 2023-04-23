function execute(url) {
    if (!page) var page = '1';
    var doc = fetch(url, {
        method: "GET",
        queries: {
            "paged": page
        }
    }).html()
    var el = doc.select(".box-cate-list ul li")
    var next = doc.select(".pagination").select("li:has(a.active) + li").text()
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").attr("title"),
            link: e.select("a").attr("href"),
            cover: e.select("a img").attr("src"),
            description: e.select(".name-author").text(),
            host: "https://ztruyen.vn"
        })
    }
    return Response.success(data,next)
}