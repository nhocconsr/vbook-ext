function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://m.ac.qq.com/rank/index').params({
        type: url,
        page : page,
        pageSize : '10',
        style: 'items',
    }).html()
    const el = doc.select(".comic-link")
    const data = [];
    el.forEach(e =>data.push({
            name: e.select(".comic-title").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".comic-update").first().text(),
            host: "https://m.ac.qq.com"
        })
    )
    if (url === 'rise' && page > 3) var next = null;
    else var next = (parseInt(page) + 1).toString();
    return Response.success(data,next)
}