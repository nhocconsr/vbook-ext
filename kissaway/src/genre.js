function execute() {
    const doc = Http.get("https://klmanga.com").html();
    const el = doc.select("ul.nav > li a");
    const data = [];
    for (var i = 3; i < el.size()-3; i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}