function execute(url) {
    var doc = Http.get(url).html();
    var el =doc.select("#nt_listchapter ul li a");
    const data = [];
    for (var i = el.size() - 1; i >= 0;i--) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url:  e.select('a' ).attr("href"),
            host: "https:/baotangtruyengo.com"
        })
    }
    return Response.success(data); 
}