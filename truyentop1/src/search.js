function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get('http://truyentop1.com/'+key+'/P'+page+'/tim-kiem.html').html();
    var next = doc.select("ul.pager").select("li.active + li").text();
    const el = doc.select("ul.list_truyen_phuhop > li");

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a.story_title").first().text().replace(/(^\w|\s\w|\D+)/g, m => m.toUpperCase()),
            link: e.select("a.story_title").first().attr("href"),
            cover: e.select("a.story_img").first().attr("style").split('"')[1],
            description: e.select("a.linkchap").text(),
            host: "http://truyentop1.com"
        })
    }

    return Response.success(data, next)
}