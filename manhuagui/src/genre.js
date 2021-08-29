function execute() {
    const doc = Http.get("https://www.manhuagui.com").html();
    const el = doc.select(".index-cont li a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href').split('/')[2]+"/index",
           script: 'gen.js'
        });
    }
    return Response.success(data);
}