function execute(url) {
    const nUrl = url.replace('h5','www')
    const doc = Http.get(nUrl).html();
    return Response.success({
        name : doc.select(".booktitle h1").text(),
        cover : doc.select("#bookimg img").first().attr("src"),
        author : doc.select("#author a").first().text(),
        description : doc.select("#bookintro").text(),
        detail : doc.select("#author").html(),
        ongoing : doc.select(".count").html().indexOf("连载") != -1,
        host : "https://www.imiaobige.com"
    });
}