function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://www.hetushu.com/book/index.php').params({type : url,page : page}).html();
    var next = doc.select(".page").select("span.current + a").text()
    const el = doc.select("ul.book_list li")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".name").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".author").first().text().replace('作者：',''),
            host: "https://www.hetushu.com"
        })
    }
    return Response.success(data, next)
}