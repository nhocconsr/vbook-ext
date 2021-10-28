function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select("h1.name").first().text(),
        cover: doc.select(".book img").first().attr('src'),
        author: doc.select(".author").first().text() || 'Unknown',
        description: doc.select(".comic-description .inner").text(),
        detail: doc.select(".tsinfo .imptdt").first().text()+'<br>'+doc.select(".author").text(),
        ongoing: doc.select(".tsinfo .imptdt").first().text().indexOf("Đang") != -1,
        host: "https://hentaivn.vip",
    });
}