function execute(url) {
    var doc = Http.get(url).html();
    doc.find('.noveContent p')
    doc.select(".noveContent p").last().remove();
    var htm = doc.select(".noveContent").html();
    htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g,'');
    htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    return Response.success(doc.find('.noveContent p'));
}