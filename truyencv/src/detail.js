function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1.css-sbwpm5").text(),
        cover: doc.select(".css-1pvhrbh img").first().attr('src'),
        description: doc.select(".css-gz8ivm").select("p"),
        detail: null,
        category: null,
        host: "https://m.truyencv.vn/"
    });
}