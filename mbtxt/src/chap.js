function execute(url) {
    var doc = Http.get(url).html('gbk');
    doc.select(".readcontent div").remove();
    var htm = doc.select(".readcontent").html();
    htm = htm.replace('本章未完，点击下一页继续阅读','');
    htm = htm.replace('630shu ，最快更新植灵女王升级记最新章节！','');
    htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g,'');
    htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    return Response.success(htm);
}