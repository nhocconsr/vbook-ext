function execute() {
    const doc = Http.get("https://truyen88.net").html();
    const el = doc.select('.category-sidebar a')
;
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.select('a').text().replace('» ',''),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}