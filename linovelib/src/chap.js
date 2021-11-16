function execute(url) {
    const doc = Http.get(url).html();
    var content = doc.select('#acontent p').html();
    content = content.replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "");
    content = content.replace(/<img.*?>/g, "");   
    content = content.replace(/(\n)\s*/g, '<br>');
    return Response.success(content);
}