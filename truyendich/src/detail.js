function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h3").text(),
        cover: doc.select(".book3d div").first().attr("data-setbg"),
        author: doc.select(".anime__details__widget ul li").first().text(),
        description: doc.select(".desc-scroll").html(),
        detail: doc.select(".anime__details__widget ul").first().html(),
        host: "https://truyendich.org"
    });
}