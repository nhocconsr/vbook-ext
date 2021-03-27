function execute(url) {
    const doc = Http.get(url).html('gbk');

    return Response.success({
        name: doc.select("#info h1").text(),
        cover: doc.select("#fmimg img").first().attr("src"),
        author: doc.select("#info p").first().text(),
        description: doc.select("#intro").text(),
        detail: doc.select("#info p").get(0).text()+'<br>'+doc.select("#info p").get(1).text(),
        host: "http://www.230book.com"
    });
}