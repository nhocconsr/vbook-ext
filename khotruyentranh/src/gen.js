function execute(url, page) {
    if (!page) page = '1';
    let doc = fetch(url + '/page-' + page).html();
    let next = doc.select(".page-pagination").select("a.next-page").attr('href').split('-')[3];
    let el = doc.select(".manga-list > ul > li")
    let data = [];
    el.forEach(e => data.push({
            name: e.select(".manga-info h3").first().text(),
            link: e.select(".manga-info h3 a").first().attr("href"),
            cover: e.select(".manga-thumb img").first().attr("data-original"),
            description: e.select(".chapter a").first().text(),
            host: "https://khotruyentranhhot.com"
        }));
    return Response.success(data, next)
}