function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".book3d img").first().attr("data-src"),
        author: doc.select("#thong_tin th").get(0).text(),
        description: doc.select(".gioi_thieu").html(),
        detail: doc.select("#thong_tin").text(),
        host: "https://truyenwiki1.com"
    });
}