function execute(url) {
    var bookID = url.split("/").pop();
    const doc = Http.get('https://ac.qq.com/Comic/comicInfo/id/'+bookID).html();
    return Response.success({
        name: doc.select("h2").first().text(),
        cover: doc.select(".works-cover img").first().attr('src'),
        author: doc.select(".works-intro-digi .first em").first().text() || 'Unknown',
        description: doc.select(".works-intro-short").html(),
        detail: doc.select(".works-intro-digi span").get(1).text()+'<br>作者： '+doc.select(".works-intro-digi .first em").text(),
        host: "https://ac.qq.com",
    });
}