function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://zingtruyen.net/category/'+url+'/'+page+'.html').html();

    var next = doc.select(".pagination").select("li.active + li").text()
    const el = doc.select(".grid-stories .story-grid")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".info meta").attr('content'),
            host: "https://zingtruyen.net"
        })
    }
    return Response.success(data, next)
}