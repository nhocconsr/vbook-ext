function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".chapter-image img");
    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("onerror").split(/['']/)[1];
        if (img.startsWith('//')) img = img.replace('//','https://');
        data.push(img);
    }
    return Response.success(data);
}