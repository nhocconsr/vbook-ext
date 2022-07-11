function execute(url) {
    const doc = Http.get('https://docsach24.co').html()
    var el = doc.select('h2.text-center a')
    const data = []
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js',
        })
    }
    return Response.success(data)
}