function execute() {
    const url = 'https://truyennhieu.com';
    const doc = Http.get(url+"/the-loai").html();
    const el = doc.select('.main-menu-more ul > li a')
;
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: url+e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}