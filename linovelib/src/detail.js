function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select("h2.book-title").first().text(),
        cover: doc.select("img.book-cover").first().attr('src'),
        author: doc.select(".book-rand-a span").first().text() || 'Unknown',
        description: doc.select(".book-summary content").text(),
        detail: doc.select(".book-meta").get(1).text()+'<br>'+doc.select(".book-rand-a").text(),
        ongoing: doc.select(".book-meta").text().indexOf("连载") != -1,
        host: "https://w.linovelib.com",
    });
}