function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select(".manga-info h3").text(),
        cover: doc.select(".info-cover img").first().attr("src"),
        author: doc.select("ul.manga-info > li:nth-child(5)").first().text(),
        description: doc.select(".well.well-sm > div:nth-child(3) > p:nth-child(3)").first().text(),
        detail: doc.select("ul.manga-info > li:nth-child(4)").html(),
        category: doc.select("ul.manga-info > li:nth-child(6)").html(),
        ongoing: doc.select("ul.manga-info > li:nth-child(5)").html().indexOf("On going") > 0,
        host: "https://klmanga.com",
    });
}