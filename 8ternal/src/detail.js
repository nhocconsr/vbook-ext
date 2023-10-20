load('config.js');
function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".movie-img img").first().attr('src'),
        description: null,
        detail: doc.select(".movie-rate").html(),
        category: null,
        host: BASE_URL
    });
}