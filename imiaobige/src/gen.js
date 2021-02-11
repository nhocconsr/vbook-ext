function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://www.imiaobige.com/'+url+'/'+page+'.html').html();

    var next = doc.select(".pages").select("strong + a").text();

    const el = doc.select("#sitebox dl")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var blink = e.select("a").first().attr("href");
        if (blink.startsWith("//")) {
            blink = "https:" + blink;
        }
        data.push({
            name: e.select("a h3").first().text(),
            link: blink,
            cover: e.select("img").first().attr("src"),
            description: e.select(".book_other a").first().text(),
            host: 'https://www.imiaobige.com',
        })
    }

    return Response.success(data, next)
}