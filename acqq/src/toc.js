function execute(url) {
    const doc = Http.get(url).html();
    var el = doc.select(".normal li a.chapter-link");
    const data = [];
    for (var i in el) {
        var e = el[i];
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://m.ac.qq.com"
        })
    }
    return Response.success(data);
}