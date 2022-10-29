function execute() {
    const doc = Http.get("https://lxhentai.org").html();
    const el = doc.select(".mt-2 a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: 'https://lxhentai.org'+ e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}