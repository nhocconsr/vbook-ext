function execute() {
    const data = [];
    const doc2 = Http.get("https://doujins.com/tags").html();
    const el2 = doc2.select('#content .row .col-6 a');
    for (var i = 0; i < el2.size(); i++) {
        var e2 = el2.get(i);
        data.push({
           title: e2.text(),
           input: e2.attr('href').replace('/',''),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}