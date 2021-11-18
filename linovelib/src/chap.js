function execute(url) {
    const doc = Http.get(url).html();
    var content = doc.select("#acontent p").html();
    var nextPage = doc.select('#footlink a').last();
    var next_url = doc.select('link[rel=prerender]').attr('href');
    while(nextPage.text() === '下一页'){
        var doc2 = Http.get('https://w.linovelib.com'+next_url).html();
        content += doc2.select("#acontent p").html();
        var nextPage = doc2.select('#footlink a').last();
        var next_url = doc2.select('link[rel=prerender]').attr('href');
    }
    content = content.replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "");
    content = content.replace(/<img.*?>/g, "");   
    content = content.replace(/(\n)\s*/g, '<br>');
    return Response.success(content);
}