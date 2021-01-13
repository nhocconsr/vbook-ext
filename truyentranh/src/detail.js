function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select("img.card-img").first().attr('src'),
        author: doc.select("li.detail-manga-title + li").first().text(),
        description: doc.select(".detail-manga-intro").text(),
        detail: doc.select("li.detail-manga-title + li").html(),
        category: doc.select(".detail-manga-category").html(),
        host: "https://truyentranh.net"
    });
}