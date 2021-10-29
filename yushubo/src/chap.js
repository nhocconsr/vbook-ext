function execute(url) {
    const doc = Http.get(url).html();
    var content = doc.select("#BookText").html();
    var nextPage = doc.select('.articlebtn a').last();
    while(nextPage.text() === '下一页'){
        var doc2 = Http.get('https://www.yushubo.com/'+nextPage.attr('href')).html();
        content += doc2.select("#BookText").html();
        var nextPage = doc2.select('.articlebtn a').last();
    }
    content = content.replace(/<p><\/p>/g,'')
    return Response.success(content);
}