function execute(url) {
    var doc = fetch(url).html();
    var content = doc.select("#read-content").select("p").html();
    content = content.replace(/\n/g,'<br>')
                .replace(/&(nbsp|amp|quot|lt|gt);/g,'')
                .replace(/(<br\/?>)+/g,"<br>");
    return Response.success(content);
}