function execute() {
    const doc = Http.get("https://doujins.com/series").html();
    const el = doc.select('#content .row .col-6 a');
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href').replace('/',''),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}