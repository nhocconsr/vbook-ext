function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".summary_image img").first().attr("data-src"),
        author: doc.select(".author-content a").first().text() || '^^!',
        description: doc.select(".desc").first().text(),
        detail:doc.select(".post-content .post-content_item .summary-content").first().text() +'<br>'+doc.select(".post-content .post-content_item .summary-content").last().text(),
        ongoing: doc.select(".post-status").html().indexOf("OnGoing") != -1,
        host: "https://truyencool.net"
    });
}