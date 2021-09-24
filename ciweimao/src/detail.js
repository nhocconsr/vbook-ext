function execute(url) {
    const nUrl = url.replace('wap.','www.');
    const doc = Http.get(nUrl).html();
    return Response.success({
        name: doc.select("h3.title").first().html().split('<')[0],
        cover: doc.select(".cover img").first().attr("src"),
        author: doc.select("h3.title a").first().text(),
        description: doc.select(".book-desc").first().text(),
        detail: doc.select(".update-state").text()+'<br>作者 : '+doc.select(".title a").text(),
        ongoing : doc.select(".update-state").html().indexOf("连载") != -1,
        host: "https://www.ciweimao.com",
    });
}