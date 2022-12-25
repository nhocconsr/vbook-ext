function execute(key, page) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let doc = fetch(BASE_URL + '/truyen-hentai-moi/?q='+key).html()
    let el = doc.select(".comics-grid .entry")
    let data = [];
    el.forEach(e =>data.push({
            name: e.select("a.name").first().text(),
            link: e.select("a.name").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".date-time").first().text(),
            host: BASE_URL
        })
    )
    return Response.success(data)
}