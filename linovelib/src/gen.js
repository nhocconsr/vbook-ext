function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://w.linovelib.com/wenku/lastupdate_0_'+url+'_0_0_0_0_0_'+page+'_0.html').html();
    var next = doc.select("#pagelink").select("strong + a").first().text();
    const el = doc.select(".book-ol .book-li")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".book-title").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("img.book-cover").first().attr("data-original"),
            description: e.select(".book-author").first().text().replace('作者 ',''),
            host: "https://w.linovelib.com"
        })
    }
    return Response.success(data, next)
}