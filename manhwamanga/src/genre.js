function execute() {
    const doc = Http.get("https://manhwamanga.net").html();
    const el = doc.select(".dropdown-menu a");
    const data = [];
    for (var i = 6; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}