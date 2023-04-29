function execute(url) {
    var doc = fetch(url).html();
    doc.select(".readcontent div").remove();
    var content = doc.select("#content").html();
    var nextPage = doc.select('a#linkNext')
    while(nextPage.text() === '下一页'){
        var doc2 = fetch(nextPage.attr('href')).html();
        content += doc2.select("#content").html();
        var nextPage = doc2.select('a#linkNext').last();
    }
    content = content.replace(/第(.+)?章/g,'')
    return Response.success(content);
}