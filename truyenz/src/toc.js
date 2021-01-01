function execute(url) {
    var doc = Http.get(url).html();
    const bookId = doc.select('input.rating-post-id').attr('value');
    const gdata = Http.post('https://truyenz.info/wp-admin/admin-ajax.php').params({
        "action": "manga_get_chapters",
        "manga": bookId,
    }).html();
    gdata.select('.c-new-tag').remove();
    var el = gdata.select(".listing-chapters_wrap li a");
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://truyenz.info"
        })
    }

    return Response.success(data);
}