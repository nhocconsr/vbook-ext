function execute() {
    const doc = Http.get("https://truyentiki.com").html();
    const el = doc.select('#menu-cate a')
;
    const data = [];
    for (var i = 4; i < el.size() - 6; i++) {
        var e = el.get(i);
        data.push({
           title: e.select('a').text(),
           input: e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}