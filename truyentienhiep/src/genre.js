function execute() {
    const doc = Http.get("https://truyentienhiep.net").html();
    const el = doc.select(".highlights .tag-list a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href').split('/')[4],
           script: 'cat.js'
        });
    }
    return Response.success(data);
}