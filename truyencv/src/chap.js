function execute(url) {
    var doc = Http.get(url).html();
    var content =doc.select(".css-cm7z1s").html();
    content = content.replace(/\n/g,'<br>')
    content = content.replace(/&nbsp;/g,'')
    return Response.success(content);
}