function execute(url) {
    var doc = Http.get(url).html();
    var content = doc.select(".container  .chapter_content").html()
    return Response.success(content); 
}
