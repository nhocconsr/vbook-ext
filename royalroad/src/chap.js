function execute(url) {
    var doc = Http.get(url).html();
    var content =doc.select(".page-content .chapter-content").select("p").html()
    return Response.success(content);
}