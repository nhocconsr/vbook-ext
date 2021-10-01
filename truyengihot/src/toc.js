function execute(url) {
    const doc = Http.post(url).html();
    var el = doc.select("#episode_list li a");
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select('.no').text(),
            url: e.attr("href"),
            host: "https://truyengihot.net"
        })
    }
    return Response.success(data);
}