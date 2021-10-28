function execute(url) {
    var doc = Http.post(url+'/ajax/chapters/').html();
    doc.select('.chapter-release-date').remove();
    var el = doc.select("li.wp-manga-chapter a")
    const list = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        list.push({
            name: e.text().replace(/(c|C)h(ap)? /g,'Chapter '),
            url: e.attr("href"),
            host: "https://hentaidexy.com"
        })
    }
    return Response.success(list);
}