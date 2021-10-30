function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".img img").first().attr("src"),
        author: doc.select(".info-item a[href~=nhom]").first().text(),
        description: doc.select(".story-detail-info").first().text(),
        detail: doc.select(".info-item").html().replace(/<[^>]*>?/gm, '').replace(/\n/g,'<br>'),
        host: "https://truyenhaytv.com",
    });
}