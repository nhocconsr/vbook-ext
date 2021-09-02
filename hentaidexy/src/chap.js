function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".reading-content img");
    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var linkImg = e.attr('src').replace(/\n|\t/g, '')
        data.push(linkImg);
    }
    return Response.success(data);
}