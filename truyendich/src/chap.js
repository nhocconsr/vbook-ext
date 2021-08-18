function execute(url) {
    var doc = Http.get(url).html();
    var content = doc.select(".chapter_content").html();
    var content = content
        // Remove script tags and content
        .replace(/<script[^>]*>.*<\/script>/gm, '');
    return Response.success(content);
}