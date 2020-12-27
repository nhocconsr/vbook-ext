function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select("#content_chap img");
    
    var imgs = [];
    for (var i = 0; i < el.size() - 1; i++) {
        var link = el.get(i).attr("src");
        if (!link.startsWith("http")) {
            if (link.startsWith("//")) {
                link = "https:" + link;
            } else {
                link = "https:" + link;
            }
        }
        imgs.push(link.trim())
    }
    return Response.success(imgs);
}