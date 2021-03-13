function execute(url) {
    var doc = Http.get(url).html();
    var content = doc.select("div.reading").html();
    var content = content.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi,'');
    return Response.success(content);
}