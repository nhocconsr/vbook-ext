function execute(url) {
    var doc = Http.get(url + '/episodes').html();

    const el = doc.select(".episodes-wrap a")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".episode-title").text(),
            url: e.select("a").attr("href"),
            host: "https://mangatoon.mobi"
        })
    }

    return Response.success(data);
}