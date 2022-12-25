function execute(url) {
    var doc = fetch(url).html();
    var el = doc.select(".chapter-content img");
    const imgs = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("src");
        if (!img.match(/credit|hentaivn/)){
            imgs.push(img)
        }
    }
    return Response.success(imgs);
}