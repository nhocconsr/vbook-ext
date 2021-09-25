function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".reading-content img");   
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push(e.attr("data-src").replace(/[\t\n]/g,''));
    }
    return Response.success(data);
}