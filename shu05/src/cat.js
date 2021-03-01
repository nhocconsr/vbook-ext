function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('http://www.shu05.com/list/'+url+'-'+page+'.html').html();

    var next = doc.select("#pagelink").select("li.active + li").text();

    const el = doc.select(".panel-body .book-coverlist")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);

        data.push({
            name: e.select("h4 a").first().text(),
            link: e.select("h4 a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".text-muted").text().split('/')[0],
            host: 'http://www.shu05.com',
        })
    }

    return Response.success(data, next)
}