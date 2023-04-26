function execute(url) {
    url = url.replace("khotruyentranhz.com","khotruyentranhonline.com")
    url = url.replace("khotruyentranhhot.com","khotruyentranhonline.com")
    var doc = fetch(url).html();
    var el = doc.select(".chapter-list a")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: e.attr("href"),
            host: "https://khotruyentranhonline.com"
        })
    }
    return Response.success(data);
}