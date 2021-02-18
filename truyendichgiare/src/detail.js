function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select(".col-info-desc div").get(1).text(),
        cover: doc.select(".book img").first().attr('src'),
        author: doc.select(".info div").get(0).text(),
        description: doc.select(".desc-text").html(),
        detail: doc.select(".info div").get(5).html()+'<br>'+doc.select(".info div").get(4).html()+'<br>'+doc.select(".info div").get(2).html(),
        host: "http://truyendichgiare.com",
    });
}