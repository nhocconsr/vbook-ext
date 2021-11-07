function execute(url) {
    const doc = Http.get(url).html();
    Console.log(doc)
    return Response.success({
        name: doc.select(".title h1").first().text(),
        cover: doc.select(".photo img").first().attr('src'),
        author: doc.select(".author").first().text() || 'Unknown',
        description: doc.select(".description").text(),
        detail: doc.select(".status").text()+'<br>'+doc.select(".author").text()+'<br>'+doc.select(".latest").text(),
        ongoing: doc.select(".status").first().text().indexOf("Đang") != -1,
        host: "https://vietwriter.vn",
    });
}