function execute(url) {
    var doc = Http.get(url).html();
    doc.select('div[id~=footnote]').remove()
    doc.select('a').remove()
    var content = doc.select("#chapter-content").html()
    var content = content.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi,'');
    return Response.success(content);
}