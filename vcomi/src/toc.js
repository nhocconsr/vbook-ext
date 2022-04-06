function execute(url) {
    let doc = fetch(url).html();
    let el = doc.select(".list-chapters a")
    const data = [];
    for (var i = el.size() - 1; i >= 0 ; i--) {
        var e = el.get(i);
        data.push({
            name: e.select('.chapter-name').text(),
            url: e.attr("href"),
            host: "https://vcomi.co"
        })
    }
    return Response.success(data);
}