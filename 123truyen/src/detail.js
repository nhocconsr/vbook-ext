function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select("h1.title").first().text(),
        cover: doc.select(".book img").first().attr('src'),
        author: doc.select(".info > div").get(0).text(),
        description: doc.select(".desc-text").html(),
        detail: doc.select(".info > div").get(0)+'<br>'+doc.select(".info > div").get(3)+'<br>'+doc.select(".info > div").get(1),
        host: "https://123truyen.com",
    });
}