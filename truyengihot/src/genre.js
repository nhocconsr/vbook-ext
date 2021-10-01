function execute() {
    const doc = Http.get("https://truyengihot.net/danh-sach-truyen.html").html();
    const el = doc.select("#genres li");
    const data = [];
    for (var i = 1; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('data-val'),
           script: 'source.js'
        });
    }
    return Response.success(data);
}