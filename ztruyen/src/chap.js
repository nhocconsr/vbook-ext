function execute(url) {
    var doc = Http.get(url).html();
    var content =doc.select(".content-post").select("p").html();
    content = content.replace(/\n/g,'<br>')
    content = content.replace(/&nbsp;/g,'')
    return Response.success(content);
}