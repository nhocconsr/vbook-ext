function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '/P'+page+'/index.html?status=2&sort=2').html();
    var next = doc.select("ul.pager").select("li.active + li").text();
    const el = doc.select("ul.lst_story > li");

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("a.story_title").first().text().replace(/(^\w|\s\w|\D+)/g, m => m.toUpperCase()),
            link: e.select("a.story_title").first().attr("href"),
            cover: e.select("a.story_img").first().attr("style").split('"')[1],
            description: e.select("a.linkchap").text().replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
            host: "http://truyentop1.com"
        })
    }

    return Response.success(data, next)
}