function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".chapter-content img.chapter-img");
    
    var data = [];

    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var linkImg = e.attr("data-aload").replace('\n\r','')
        data.push({
        "link": linkImg,
        "referer": "https://klmanga.com"
    });
    }
    return Response.success(data);
}