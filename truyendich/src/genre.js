function execute() {
    const doc = Http.get("https://truyendich.org").html();
    const el = doc.select(".dropdown li a");
    const data = [];
    for (var i = 7; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href').split(/[=&]/)[1],
           script: 'cat.js'
        });
    }
    return Response.success(data);
}