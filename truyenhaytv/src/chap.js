function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".content_view_chap img");
    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-original");
        if (img.startsWith('/')){
            img = img.replace('/','https://truyenhaytv.com/')
        }
        data.push(img);
    }
    return Response.success(data);
}