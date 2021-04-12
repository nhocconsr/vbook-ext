function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://manganelo.com/genre-all/'+page+'?type='+url).html();

    var next = doc.select(".group-page").select("a.page-select + a").text();

    const el = doc.select(".panel-content-genres .content-genres-item");

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".genres-item-chap").text(),
            host: "https://manganelo.com"
        })
    }

    return Response.success(data, next)
}