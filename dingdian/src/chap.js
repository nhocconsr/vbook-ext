
function execute(url) {
    var doc = Http.get(url).html();
    var htm = doc.select("#txt").html();
    htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g,'');
    htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    return Response.success(htm);
}