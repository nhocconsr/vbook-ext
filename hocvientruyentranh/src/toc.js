function execute(url) {
    var doc = Http.get(url).html();

    const el = doc.select("table > tbody > tr")

    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: e.select("a").attr("href"),
            host: "https://hocvientruyentranh.net"
        })
    }

    return Response.success(data);
}