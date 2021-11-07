function execute(url) {
    const doc = Http.get(url+'/').html();
    var el = doc.select('#list-chapterAll a')
    const data = [];
    for (var i in el) {
        var e = el[i];
        data.push({
            name: e.text(),
            url: e.attr('href'),
            host: "https://www.19358.net"
        })
    }
    return Response.success(data);
}