function execute(url) {
    var doc = Http.get(url).html();
    var bookId = doc.select('#manga-chapters-holder').attr('data-id');
    const gdata = Http.post('https://truyencool.net/wp-admin/admin-ajax.php').params({
        'action': 'manga_get_chapters',
        'manga': bookId
    }).html();
    gdata.select('.c-new-tag').remove();
    var el = gdata.select(".listing-chapters_wrap li a");
    const listChap = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        listChap.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://truyencool.net"
        })
    }
    return Response.success(listChap);
}