function execute(key) {
    const doc = Http.get('https://docsach24.co/?q='+ key + '&type_search=book').html();
    const el = doc.select("#list-posts .form-group")
    size = el.size()
    const data = [];
    for (var i = 0; i < size; i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3 a").text(),
            link: e.select("h3 a").attr("href"),
            cover: e.select("img").attr("data-src"),
            description: null,
            host: "https://docsach24.co"
        })
    }
    return Response.success(data)
}