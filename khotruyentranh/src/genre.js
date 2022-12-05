function execute() {
    const doc = Http.get("https://khotruyentranhvip.com").html();
    const el = doc.select("ul.sub-menu > li a");
    const data = [];
    for (var i = 1; i < el.size()-3; i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: 'https://khotruyentranhvip.com'+ e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}