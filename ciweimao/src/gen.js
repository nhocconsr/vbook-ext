function execute(url, page) {
    if (!page) page = '1';
    const html = Http.get('https://www.ciweimao.com/rank-index/'+url+'/'+page).html();
    var next = html.select('.pagination').select('li.selected + li').first().text();
    const el = html.select("ol.rank-book-list li");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3.tit").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("img").first().attr("data-original"),
            description: e.select(".cnt > p > a").text(),
            host: "https://www.ciweimao.com"
        })
    }
    return Response.success(data, next)
}