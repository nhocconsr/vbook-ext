function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".360_chapter_content img");
    
    var data = [];

    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-src");
        if (img.startsWith('/')){
            img = img.replace('/','https://truyenhaytv.com/')
        }
        data.push(img);
    }
    return Response.success(data);
}