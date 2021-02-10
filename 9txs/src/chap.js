function execute(url) {
    var doc = Http.get(url).html();
    doc.select(".ad_content").remove();
    var htm = doc.select("#content").html();
    htm = htm.substring(htm.indexOf('</p>'));
    htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g,'');
    htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    return Response.success(htm);
}