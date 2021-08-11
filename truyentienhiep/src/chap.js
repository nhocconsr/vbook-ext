function execute(url) {
    var doc = Http.get(url).html();
    var content = doc.select(".chapter-c").html();
    var content = content
        .replace(/<i>(.*?)<\/i>/gi, "")
        //convert br to \n
        .replace(/<br>/gi, "\n")
        // Remove script tags and content
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        // Remove all opening, closing and orphan HTML tags
        .replace(/<(?:.|\s)*?>(.*?)<\/(?:.|\s)*?>/g, "")
        //convert br to \n
        .replace(/\n/gi, "<br>") 
    return Response.success(content);
}