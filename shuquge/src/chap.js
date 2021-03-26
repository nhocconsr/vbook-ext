function execute(url) {
    var doc = Http.get(url).html();
    doc.select(".ad_content").remove();
    var htm = doc.select("#content").html();
    htm = htm.replace('请记住本书首发域名：www.shuquge.com。书趣阁_笔趣阁手机版阅读网址：m.shuquge.com','');
    htm = htm.replace(url,'');
    htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g,'');
    htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    return Response.success(htm);
}