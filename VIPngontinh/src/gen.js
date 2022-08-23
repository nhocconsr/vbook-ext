function execute(url, page) {
    const doc =Http.get(url).html()
    var el = doc.select('.container .row .listhot')
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select('.m-0').text(),
            link: e.select('a').attr("href"),
            cover: null,
            description: null,
            host: "https://truyenvipfull.com"
        })
    }
    return Response.success(data)
}