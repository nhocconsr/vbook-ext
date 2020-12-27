function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".chapter-content img.chapter-img");
    
    var data = [];

    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push(e.attr("data-original"));
    }
    return Response.success(data);
}