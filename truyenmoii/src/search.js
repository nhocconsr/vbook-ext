function execute(key) {
    const doc = Http.get('https://truyenmoii.com/tim-kiem?tukhoa='+ key ).html();
    const el = doc.select("#list-page .col-truyen-main .row")
    size = el.size()
    const data = [];
    for (var i = 0; i < size; i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").text(),
            link: e.select("h3 a").attr("href"),
            cover: e.select("img").attr("data-src"),
            description: e.select(".author").text(),
            host: "https://truyenmoii.com"
        })
    }
    return Response.success(data)
}