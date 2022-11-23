function execute(url) {
    const doc = fetch(url).html();
    var content = doc.select("#BookText").html();
    var nextPage = doc.select('.articlebtn a').last();
    while(nextPage.text() === '下一页'){
        var doc2 = fetch('https://www.yushugu.com/'+nextPage.attr('href')).html();
        content += doc2.select("#BookText").html();
        var nextPage = doc2.select('.articlebtn a').last();
    }
    content = content.replace(/<p><\/p>/g,'')
    return Response.success(content);
}