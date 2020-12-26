function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("h3").text(),
        cover: doc.select(".__image img").first().attr("src"),
        author: doc.select("div.__info > p:nth-child(4)").first().text(),
        description: doc.select(".__description > p").text(),
        detail: doc.select("div.__info > p:nth-child(2)").html()+ "<br>" + doc.select("div.__info > p:nth-child(5)").html(),
        category: doc.select("div.__info > p:nth-child(3)").html(),
        host: "https://hocvienttruyentranh.net"
    });
}