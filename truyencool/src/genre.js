function execute() {
    const doc = Http.get("https://truyencool.net").html();
    const el = doc.select(".genres ul > li a");
    el.select('.count').remove();
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}