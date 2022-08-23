function execute(url) {
    var doc = Http.get(url).html();
    var imgs = []
    content = doc.select('.reading-detail  img').forEach(e => imgs.push(e.attr("data-src")));
    return Response.success(imgs);

}