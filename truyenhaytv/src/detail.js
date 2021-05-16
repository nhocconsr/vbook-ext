function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("h1.title").text(),
        cover: doc.select(".comicInfo img").first().attr("data-src"),
        author: doc.select(".author").first().text(),
        description: doc.select(".infoBox").first().text(),
        detail: doc.select(".author").get(1).html(),
        host: "https://truyenhaytv.com",
    });
}