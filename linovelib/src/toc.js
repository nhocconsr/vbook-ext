function execute(url) {
    var doc = Http.get(url.replace('.html','/catalog')).html();
    var el = doc.select('.chapter-ol .chapter-li a')
    const data = [];
    el.forEach(item => data.push({
        name: item.text(),
        url: item.attr('href'),
        host: "https://w.linovelib.com"
    }))
    return Response.success(data);
}