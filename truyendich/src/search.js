function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get('https://truyendich.org/loc-truyen').params({'keyword': key,'page':page}).html()

    var next = doc.select(".product__pagination").select("a.current-page + a").text()
    const el = doc.select(".product__page__content .product__item")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h5 a").first().text(),
            link: e.select("h5 a").first().attr("href"),
            cover: e.select("a div").attr("data-image"),
            description: e.select(".ep").first().text(),
            host: "https://truyendich.org"
        })
    }
    return Response.success(data,next)
}