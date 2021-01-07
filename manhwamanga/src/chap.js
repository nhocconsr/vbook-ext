function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".chapter_beta_content img");
    
    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push(e.attr("src").replace('?ssl=1',''));
    }
    return Response.success(data);
}