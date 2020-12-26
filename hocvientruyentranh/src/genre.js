function execute() {
    const doc = Http.get("https://hocvientruyentranh.net/index.php/truyen/all").html();
    const el = doc.select(".box-body ul.nav > li a");
    const data = [];
    for (var i = 3; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}