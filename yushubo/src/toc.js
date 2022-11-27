function execute(url) {
    const idBook = url.match(/\d+/)[0];
    const yUrl = 'https://www.yushugu.com/list_other_'+idBook+'.html';
    var doc = fetch(yUrl).html();
    var el = doc.select("ul.chapter-list li a")
    const list = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        list.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://www.yushugu.com"
        })
    }
    return Response.success(list)
}