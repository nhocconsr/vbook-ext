function execute() {
    const doc = Http.get("https://sttruyen.com").html();
    const el = doc.select('.footer .col-md a')
;
    const data = [];
    for (var i = 4; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.select('a').text().replace('Truyện ',''),
           input: e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}