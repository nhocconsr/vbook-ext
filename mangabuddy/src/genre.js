function execute() {
    const doc = Http.get("https://novelbuddy.com").html();
    const el = doc.select(".genres__wrapper li a");
    const data = [];
    for (var i = 3; i < el.size() - 2; i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}