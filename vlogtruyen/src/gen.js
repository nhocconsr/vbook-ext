load('config.js');
function execute(url, page) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    if (!page) page = '1';
    const doc = Http.get(BASE_URL + url).params({page: page}).html();

    var next = doc.select(".pagination").select("li.active + li").text()

    const el = doc.select(".content-tab .commic-hover")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select(".image-commic-tab img").first().attr("data-src"),
            description: e.select(".chapter-commic-tab a").first().text(),
            host: BASE_URL
        })
    }

    return Response.success(data, next)
}