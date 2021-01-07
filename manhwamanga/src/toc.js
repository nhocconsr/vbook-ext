function execute(url) {
    var doc = Http.get(url).html();
    var postId = doc.select("input[id=id_post]").first().attr("value")
    var adoc = Http.post('https://manhwamanga.net/wp-admin/admin-ajax.php').params({
        action: 'tw_ajax',
        type: 'list_chap',
        id: postId,
    }).html();
    const data = [];
    var el = adoc.select("#chapter_jump option");
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("value"),
            host: "https://manhwamanga.net"
        })
    }

    return Response.success(data);
}