function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".book3d img").first().attr("data-src"),
        author: doc.select(".info span").get(1).text(),
        description: doc.select(".gioi_thieu").html(),
        detail: doc.select(".info").get(1).text(),
        host: "https://truyenwiki.com"
    });
}