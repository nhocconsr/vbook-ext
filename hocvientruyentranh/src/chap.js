function execute(url) {
    var doc = Http.get(url).html();

    doc.select(".quang-cao-cuoi-trang").remove();
    doc.select(".noi-dung-quang-cao-cuoi-trang-mobile").remove();
    doc.select(".noi-dung-quang-cao-cuoi-trang-pc").remove();
    var el = doc.select(".manga-container img");

    var data = [];
    
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push(e.attr("src"));
        
    }
    return Response.success(data);
}