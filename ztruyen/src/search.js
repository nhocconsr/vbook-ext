function execute(key) {
    const doc = Http.get('https://ztruyen.vn/tim-kiem/'+ key).html();
    const el = doc.select("#load_data_story .item")
    const data = []
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".text-blue-5").first().text(),
            host: "https://ztruyen.vn"
        })
    }

return Response.success(data)
}