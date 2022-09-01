function execute(url) {
    var doc = Http.get(url).html();
    var imgs = []
    content = doc.select('img').forEach(e => imgs.push(e.attr("src")));
    return Response.success(imgs);
}