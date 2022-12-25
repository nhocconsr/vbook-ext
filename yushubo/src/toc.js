load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);



    const idBook = url.match(/\d+/)[0];
    const yUrl = BASE_URL + '/list_other_' + idBook + '.html';
    var doc = fetch(yUrl).html();
    var el = doc.select("ul.chapter-list li a")
    const list = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        list.push({
            name: e.text(),
            url: e.attr("href"),
            host: BASE_URL
        })
    }
    return Response.success(list)
}