function execute(url) {
    var doc = Http.get(url).html();
    var el =doc.select("ul.list-charts li a");
    const data = [];
    for (var i = 0; i <el.size();i++) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url:  "https://k.2kxs.org/"+ e.select('a').attr("href"),
            host: "https://k.2kxs.org"
        })
    }
    return Response.success(data); 
}