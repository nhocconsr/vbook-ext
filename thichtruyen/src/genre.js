function execute() {
    const base = 'https://thichtruyen.vn';
    const doc = Http.get(base).html();
    const el = doc.select('#left-category ul.nav > li a');
    
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.select('a').text(),
           input: base + e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}