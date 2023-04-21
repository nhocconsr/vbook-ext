function execute() {
    const doc = Http.get("https://ztruyen.vn").html();
    const el = doc.select(".cate-left-menu a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen2.js',
        });
    }
    return Response.success(data);
}