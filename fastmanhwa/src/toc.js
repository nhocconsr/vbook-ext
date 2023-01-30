function execute(url) {
    const gdata = fetch(url).html();
    gdata.select('.c-new-tag').remove();
    var el = gdata.select(".wp-manga-chapter a");
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://fastmanhwa.net"
        })
    }
    return Response.success(data);
}