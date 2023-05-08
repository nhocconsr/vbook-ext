function execute() {
    const doc = Http.get("https://khotruyentranhonline.net").html();
    const el = doc.select("ul.sub-menu > li a");
    const data = [];
    for (var i = 1; i < el.size()-3; i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: 'https://khotruyentranhonline.net'+ e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}