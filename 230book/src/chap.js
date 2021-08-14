function execute(url) {
    var htm = "";
    if (url.indexOf("m.230book") !== -1) {
        var doc = Http.get(url).html();
        doc.select(".ad_content").remove();
        htm1 = doc.select("#chaptercontent").html();
        var cPage = url.replace('.html','_2.html');
        var doc2 = Http.get(cPage).html();
        htm2 = doc2.select("#chaptercontent").html();
        htm = htm1 + htm2;
        htm = htm.replace(/(<p[^>]+?>|<p>|<\/p>)/g,'');
        htm = htm.replace(/<center[^>]*>([^<]+)<\/center>/g,'');
    }else{
        var doc = Http.get(url).html('gbk');
        doc.select(".ad_content").remove();
        var htm = doc.select("#content").html();
    }  
    htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g,'');
    htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    return Response.success(htm);
}