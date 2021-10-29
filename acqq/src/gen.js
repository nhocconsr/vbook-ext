function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://ac.qq.com/Comic/index/audience/'+url+'/page/'+page).html()
    const el = doc.select(".ret-search-list .ret-search-item")
    const data = [];
    el.forEach(e =>data.push({
            name: e.select("h3 a").first().text(),
            link: e.select("h3 a").first().attr("href"),
            cover: e.select("img").first().attr("data-original"),
            description: e.select(".ret-works-author").first().text(),
            host: "https://ac.qq.com"
        })
    )
    var allItem = Math.floor(doc.toString().match(/totalNum = "(.+?)";/)[1] / 12 + 1);
    if (page < allItem) var next = (parseInt(page) + 1).toString();
    return Response.success(data,next)
}