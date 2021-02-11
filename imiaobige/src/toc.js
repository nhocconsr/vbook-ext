function execute(url) {
    const bid = url.split('/')[4].split('.')[0];
    var doc = Http.get('https://www.imiaobige.com/read/'+bid).html();

    var el = doc.select("#readerlists ul li a")
    const data = [];
    for (var i = 12;i < el.size(); i++) {
        var e = el.get(i);
        var blink = e.attr("href");
        if (blink.startsWith("//")) {
            blink = "https:" + blink;
        }
        data.push({
            name: e.select("a").text(),
            url: blink,
            host: "https://www.imiaobige.com"
        })
    }

    return Response.success(data);
}