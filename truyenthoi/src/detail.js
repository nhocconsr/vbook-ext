function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h3.title").text(),
        cover: doc.select(".book img").first().attr("src"),
        author: doc.select(".info-chitiet").first().text(),
        description: doc.select(".desc-text").html(),
        detail: doc.select(".info").html(),
        host: "https://truyenthoi.net"
    });
}