function execute(url) {
    var doc = Http.get(url).html();
    var el =doc.select(".row .cast-left ");
    const data = [];
    for (var i = 0; i < el.size();i++) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url:  e.select('a' ).attr("href"),
            host: "https://comic.8ternal.com.vn/"
        })
    }
    return Response.success(data); 
}