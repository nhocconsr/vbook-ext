function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get('https://manhuarock.net/tim-kiem/'+ page + '?keyword='+ key).html();
    var next = doc.select(".pagination").select("li.active + li").text()
    const el = doc.select(".listupd .page-item ")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select(" img").first().attr("data-src"),
            description: null,
            host: "https://manhuarock.net"
        })
    }

    return Response.success(data, next)
}