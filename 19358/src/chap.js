load('libs.js')
function execute(url) {
    let doc = fetch(url).html();
    doc.select(".readcontent div").remove();
    let content = doc.select("#wudidexiaoxiao").html();
    let nextPage = doc.select('a#linkNext')
    while(nextPage.text() === '下一页'){
        let doc2 = fetch(nextPage.attr('href')).html();
        content += doc2.select("#wudidexiaoxiao").html();
        nextPage = doc2.select('a#linkNext').last();
    }
    content = content.replace(/第(.+)?章/g,'')
    return Response.success(clean(content));
}