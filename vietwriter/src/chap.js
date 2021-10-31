function execute(url) {
    const doc = Http.get(url).html();
    var content = doc.select('article .bbWrapper').html();
    content = content.replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "");
    content = content.replace(/<\/p>/g,'<\/p><br>');
    content = content.replace(/<\/?p.*?>/g,'');
    content = content.replace(/<img.*?>/g, "");   
    content = content.replace(/VietWriter cập nhật nhanh nhất./g, '<br>');
    content = content.replace(/(<br>\s*){2,}/g, '<br>');
    return Response.success(content);
}