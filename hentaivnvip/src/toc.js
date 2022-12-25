function execute(url) {
    let doc =fetch(url).html();
    let el = doc.select(".chap-list a")
    let list = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        list.push({
            name: e.select('span').first().text(),
            url: e.attr("href"),
            host: "https://hentaivnvip.com"
        })
    }
    return Response.success(list);
}