function execute(url) {
    var doc = Http.get(url).html();
    return Response.success({
        name: doc.select(".folder-title a").last().text(),
        cover: doc.select("img#swiper-1").first().attr("data-src"),
        author: doc.select(".gallery-artist a[href~=artists]").text() || '^^!',
        description: doc.select(".folder-message").last().text(),
        detail : doc.select(".gallery-artist").text() + '<br>' +doc.select(".folder-message").first().text(),
        ongoing: false,
        host: "https://doujins.com"
    });
}