function execute(url) {
    const base = 'https://truyengihot.net/'
    var doc = Http.get(url).html();
    var el = doc.select(".pageWrapper img");
    const imgs = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-echo");
        if (!img.endsWith('donate.png')){
            imgs.push(base+img)
        }
    }
    return Response.success(imgs);
}