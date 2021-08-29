function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://www.manhuagui.com/list/'+url+'_p'+page+'.html').html();

    var next = doc.select(".pager").select("span.current + a").text()

    const el = doc.select("ul#contList li")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var linkImg = e.select("img").first().attr("src");
        if (!linkImg){
            linkImg = e.select("img").first().attr("data-src");
        }
        data.push({
            name: e.select(".ell a").first().text(),
            link: e.select(".ell a").first().attr("href"),
            cover: linkImg,
            description: e.select(".tt").first().text().replace('更新至',''),
            host: "https://www.manhuagui.com"
        })
    }

    return Response.success(data, next)
}