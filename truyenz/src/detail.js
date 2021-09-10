function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".summary_image img").first().attr("data-src"),
        author: doc.select(".author-content a").first().text(),
        description: doc.select(".summary__content p").first().html(),
        detail:doc.select(".post-content .post-content_item .summary-content").get(2).html()+'<br>Tác giả : '+doc.select(".post-content .post-content_item .summary-content").get(3).text(),
        ongoing: doc.select(".post-status").html().indexOf("Đang tiến hành") != -1,
        host: "https://truyenz.info"
    });
}