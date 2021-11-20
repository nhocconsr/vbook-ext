function execute() {
    const doc = Http.get("https://mangabuddy.com").html();
    const el = doc.select(".genres__wrapper li a");
    const data = [];
    for (var i = 4; i < el.size() - 2; i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}