function execute(url) {
    var doc = Http.get(url).html();
    var content =doc.select(".area-show-content").html();
    return Response.success(content);
}