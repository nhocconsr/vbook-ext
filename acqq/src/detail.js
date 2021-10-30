function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select("h1").first().text(),
        cover: doc.select("meta[property=og:image]").first().attr('content'),
        author: doc.select(".works-intro-digi .first em").first().text() || 'Unknown',
        description: doc.select(".head-info-desc").html(),
        detail: doc.select(".info-member-rate").text()+'<br>作者： '+doc.select(".author-wr").text(),
        host: "https://m.ac.qq.com",
    });
}