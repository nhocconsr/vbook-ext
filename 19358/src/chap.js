load('libs.js')
function execute(url) {
    var doc = Http.get(url).html();
    doc.select(".readcontent div").remove();
    var content = doc.select("#wudidexiaoxiao").html();
    var nextPage = doc.select('a#linkNext')
    while(nextPage.text() === '下一页'){
        var doc2 = Http.get(nextPage.attr('href')).html();
        content += doc2.select("#wudidexiaoxiao").html();
        var nextPage = doc2.select('a#linkNext').last();
    }
    content = content.replace(/第(.+)?章/g,'')
    return Response.success(clean(content));
}