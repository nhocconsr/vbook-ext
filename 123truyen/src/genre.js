function execute() {
    const base = 'https://123truyen.com';
    const doc = Http.get(base).html();
    const el = doc.select('.list-cat-inner  a');
    
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.select('a').text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}