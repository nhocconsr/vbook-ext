function execute(url) {
    const doc = Http.get(url).html();

    return Response.success({
        name: doc.select("h1#novelName").text(),
        cover: doc.select(".T-L-T-Img img").first().attr("src"),
        author: doc.select(".T-L-O-Z-Box1 a").first().text(),
        description: doc.select(".T-L-T-C-Box1").text(),
        detail: doc.select(".T-R-T-B2-Box1").html(),
        host: "https://b.faloo.com"
    });
}