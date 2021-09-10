function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://www.wusanzw.com/shuku/0_'+url+'_0_'+page+'.html').html();
    var next = doc.select("#pagelink").select("strong + a").text().match(/\d+/)[0];;
    const el = doc.select(".sitebox dl")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var blink = e.select("a").first().attr("href");
        if (blink.startsWith("//")) {
            blink = "https:" + blink;
        }
        data.push({
            name: e.select("h3 a").first().text(),
            link: blink,
            cover: e.select("img").first().attr("src"),
            description: e.select(".book_other span").first().text(),
            host: 'https://www.imiaobige.com',
        })
    }
    return Response.success(data, next)
}