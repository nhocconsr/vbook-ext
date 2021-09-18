function execute() {
    const doc = Http.get("https://vcomi.co").html();
    const el = doc.select(".tag-footer a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href').match(/loai-(.*)\.html/)[1],
           script: 'cat.js'
        });
    }
    return Response.success(data);
}