function execute(url) {
    const doc = fetch(url).html()
    return Response.success({
        name: doc.select(".headline h1").text(),
        cover: doc.select(".manga-thumb img").first().attr("data-original"),
        author: doc.select(".mt-author").first().text(),
        description: doc.select(".showless").first().text(),
        detail: doc.select(".manga-col-item > div > div:nth-child(3)").text()+'<br>'+doc.select(".manga-col-item > div > div:nth-child(4)").text()+'<br>'+doc.select(".manga-col-item > div > div:nth-child(5)").text(),
        ongoing: doc.select(".meta-data").html().indexOf("On going") > 0,
        host: "https://khotruyentranhz.com",
    });
}