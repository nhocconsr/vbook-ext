function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://w.linovelib.com/ajax/top/'+url+'/1/'+page+'.html').html();
    const el = doc.select(".book-li")
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
    return Response.success(data,(parseInt(page) + 1).toString())
}