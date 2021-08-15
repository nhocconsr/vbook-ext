function execute() {
    const doc = Http.get('https://gettruyen.com/search').html();
    const el = doc.select('.max-h-96 a')
;
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href').match(/\d+/)[0],
           script: 'source.js'
        });
    }
    return Response.success(data);
}