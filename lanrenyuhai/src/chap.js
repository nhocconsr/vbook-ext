load('libs.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        doc.select(".readcontent div").remove();
        var htm = doc.select(".readcontent").html();
        var next_page = doc.select('a#linkNext').attr('href')
        if(next_page.search('http') != -1){
            let response2 = fetch(next_page);
            var doc2 = response2.html('gbk');
            doc2.select(".readcontent div").remove();
            htm += doc2.select(".readcontent").html();
        }
        htm = htm.replace('本章未完，点击下一页继续阅读','');
        htm = htm.replace('630shu ，最快更新植灵女王升级记最新章节！','')
            .replace(/\n/g,'')
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
            .replace(/(<br\s*\/?>){2,}/g, '<br>'); 
        return Response.success(clean(htm));
    }
    return null;
}
