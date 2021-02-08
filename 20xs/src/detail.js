function execute(url) {
    const doc = Http.get(url).html();

    return Response.success({
        name: doc.select("#info h1").text(),
        cover: doc.select("#fmimg img").first().attr("src"),
        author: doc.select("#info p").get(0).text(),
        description: doc.select("#intro p").get(1).text(),
        detail: doc.select("#info p").get(0).html()+'<br>'+doc.select("#info p").get(2).html(),
        host: "https://www.20xs.org"
    });
}