function execute(url) {
    const doc = Http.get(url).html();

    return Response.success({
        name: doc.select(".booktitle h1").text(),
        cover: doc.select("#bookimg img").first().attr("src"),
        author: doc.select("#author a").first().text(),
        description: doc.select("#bookintro").text(),
        detail: doc.select("#author").html(),
        host: "https://www.imiaobige.com"
    });
}