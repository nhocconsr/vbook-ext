function execute() {
    const doc = Http.get("https://truyenthoi.com").html();
    const el = doc.select('.list-truyen .index-cate')
;
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.select('a').attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}