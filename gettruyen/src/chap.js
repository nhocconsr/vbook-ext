function execute(url) {
    var doc = Http.get(url).html();
    var content = doc.select(".content").html();
    var content = content
        // Remove script tags and content
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        //convert br to \n
        .replace(/\n/gi, "<br>") 
    return Response.success(content);
}