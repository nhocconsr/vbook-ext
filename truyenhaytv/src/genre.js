function execute() {
    const doc = Http.get("https://truyenhaytv.com").html();
    const el = doc.select(".sub_menu .li_sub a");
    const data = [];
    for (var i = 0; i < el.size() - 4; i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}