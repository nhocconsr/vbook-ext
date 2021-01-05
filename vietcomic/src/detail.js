function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select(".manga-info-text h1").first().text(),
        cover: doc.select(".manga-info-pic img").first().attr('src'),
        author: doc.select("ul.manga-info-text > li:nth-child(2)").first().text(),
        description: doc.select(".manga-info-content").html(),
        detail: doc.select("ul.manga-info-text > li:nth-child(2)").html() + '<br>' +doc.select("ul.manga-info-text > li:nth-child(4)").html() + '<br>' +doc.select("ul.manga-info-text > li:nth-child(3)").html(),
        host: "https://vietcomic.net",
    });
}