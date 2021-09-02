function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url+'/page/'+page).html();
    var next = doc.select(".wp-pagenavi").select("span.current + a").text()
    const el = doc.select("#loop-content .manga")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".chapter").first().text(),
            host: "https://hentaidexy.com"
        })
    }

    return Response.success(data, next)
}