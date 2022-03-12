function execute(url) {
    const doc = Http.get(url).html();
    const el = doc.select(".content .row .item")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a").attr("title"),
            link: e.select("a").attr("href"),
            cover: e.select("a img").attr("src"),
            description: null,
            host: "https://ztruyen.vn"
        })
    }

    return Response.success(data)
}