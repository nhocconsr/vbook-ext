function execute(url) {
    var doc = Http.get(url).html();
    var htm = doc.select(".article-text").html()
        .replace(/<a[^>]*>([^<]+)<\/a>/g,'')
        //.replace(/<[^>]*>?/gm, '')
        .replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    return Response.success(htm);
}