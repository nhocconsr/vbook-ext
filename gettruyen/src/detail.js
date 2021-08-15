function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select("figure img").first().attr("src"),
        author: doc.select(".text-gray-200 div").text(),
        description: doc.select(".leading-normal p").html(),
        detail: doc.select(".text-gray-200 div").html(),
        host: "https://gettruyen.com"
    });
}