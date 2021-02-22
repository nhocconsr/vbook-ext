function execute(url, page) {
    if (!page) page = 1;
    const doc = Http.get('https://www.tadu.com/store/'+url+'-a-0-5-a-40-t-'+page+'-98').html();

    var next = doc.select("form#pageForm").select("a.active + a").text()

    const el = doc.select(".bookList> li")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".rtList a").first().text(),
            link: e.select(".rtList a").first().attr("href"),
            cover: e.select("img").first().attr("data-src"),
            description: e.select("a.authorNm").first().text(),
            host: "https://www.tadu.com"
        })
    }
    return Response.success(data, next)
}