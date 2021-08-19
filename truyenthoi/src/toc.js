function execute(url) {
    var doc = Http.get(url).html();
    const bookId = doc.select("input[id=id_post]").first().attr("value")
    var adoc = Http.post("https://truyenthoi.net/wp-admin/admin-ajax.php").params({
        action:  "tw_ajax",
        type:  "list_chap",
        id: bookId
    }).html();
    var el = adoc.select("#chapter_jump option")
    const data = [];
    for (var i = 0;i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("value"),
            host: "https://truyenthoi.net"
        })
    }

    return Response.success(data);
}