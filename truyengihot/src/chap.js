function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".pageWrapper img");
    const imgs = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var url = e.attr("data-echo");
        if (!url.endsWith('donate.png')){
            imgs.push(url)
        }
    }
    return Response.success(imgs);
}