function execute() {
    const doc = Http.get("https://fastmanhwa.net").html();
    const el = doc.select(".menu-item a");
    const data = [];
    for (var i = 8; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}