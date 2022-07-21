function execute(url) {
    var doc = Http.get(url).html();
    var el =doc.select(".phantrangcon .post-page-numbers");
    const data = [];
    for (var i = 0; i < el.size();i++ ) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url:  e.select('a' ).attr("href"),
            host: "https://sachhayonline.com/tua-sach"
        })
    }
    data[0].url = url
    return Response.success(data); 
}