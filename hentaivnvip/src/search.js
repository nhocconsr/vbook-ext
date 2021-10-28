function execute(key, page) {
    const doc = Http.get('https://hentaivn.vip/truyen-hentai-moi/?q='+key).html()
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
    return Response.success(data)
}