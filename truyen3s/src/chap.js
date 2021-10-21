function execute(url) {
    const doc = Http.get(url).html();
    var content = doc.select('.chapter-content').html();
    content = content.replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "");
    content = content.replace(/<\/p>/g,'<\/p><br>');
    content = content.replace(/<\/?p.*?>/g,'');
    content = content.replace(/<img.*?>/g, "");
    content = content.replace(/(_)+Hết chap (\d+)?(_)+/g, "");
    return Response.success(content);
}