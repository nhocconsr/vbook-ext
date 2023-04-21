function execute(url) {
    var doc = fetch(url).html();
    var el = doc.select(".list-chapter li a");
    const data = [];
    for (var i = 4;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.select('a').attr('href').replace('..',''),
            host: "https://ztruyen.vn"
        })
    }
    return Response.success(data);
}