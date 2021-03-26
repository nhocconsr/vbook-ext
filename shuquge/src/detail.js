function execute(url) {
    const doc = Http.get(url).html();

    return Response.success({
        name: doc.select(".info h2").text(),
        cover: doc.select(".cover img").first().attr("src"),
        author: doc.select(".small span").first().text(),
        description: doc.select(".intro").text(),
        detail: doc.select(".small span").get(0).text()+'<br>'+doc.select(".small span").get(2).text(),
        host: "http://www.shuquge.com"
    });
}