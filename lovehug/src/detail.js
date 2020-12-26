function execute(url) {
    const doc = Http.get(url+'/?PageSpeed=noscript').html()

    return Response.success({
        name: doc.select("h3").text(),
        cover: doc.select(".info-cover img").first().attr("src"),
        author: doc.select(".info-manga ul > li:nth-child(3)").first().text(),
        description: doc.select(".summary-content > p").text(),
        detail: doc.select(".info-manga ul > li:nth-child(2)").html(),
        category: doc.select(".info-manga ul > li:nth-child(4)").html(),
        ongoing: doc.select(".info-manga ul > li:nth-child(5)").html().indexOf("On going") > 0,
        host: "https://lovehug.net",
    });
}