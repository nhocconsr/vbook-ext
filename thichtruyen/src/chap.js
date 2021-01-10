function execute(url) {
    var doc = Http.get(url).html();
    var content = doc.select("div.story-detail-content").html();
    var content = content.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi,'');
    var content = content.replace(/<ins\s+class="adsbygoogle">[\S\s]*?<\/ins>/gi,'');
    return Response.success(content);
}