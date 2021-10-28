function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url+'/page/'+page).html()
    var next = doc.select('.z-pagination').select('span.current + a').text();
    const el = doc.select(".comics-grid .entry")
    const data = [];
    el.forEach(e =>data.push({
            name: e.select("a.name").first().text(),
            link: e.select("a.name").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".date-time").first().text(),
            host: "https://hentaivn.vip"
        })
    )
    return Response.success(data,next)
}