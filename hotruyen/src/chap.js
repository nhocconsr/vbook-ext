function execute(url) {
    const doc = Http.get(url).html();
    doc.select('div[class~=adsense]').remove()
    var content = doc.select("#borderchapter").html()
    var content = content.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi,'');
    var content = content.replace(/&(nbsp|amp|quot|lt|gt);/g,'');
    return Response.success(content);
}