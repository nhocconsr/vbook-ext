function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '?status=0&page='+page+'&name=&genre=&sort=last_update').html();

    var next = doc.select("ul.pager").select("li.active + li").text();

    const el = doc.select("ul#danhsachtruyen > li");
    const base = 'https://sayhentai.net/app'
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".info-bottom a").first().text(),
            link: e.select(".info-bottom a").first().attr("href"),
            cover: e.select("a").first().attr("data-src").replace('//st', "https://st"),
            description: e.select(".info-bottom span").text().replace(/\ :.*/g, ""),
            host: "https://sayhentai.net"
        })
    }

    return Response.success(data, next)
}