function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1.text-xs-center").text(),
        cover: doc.select(".book img").attr('src'),
        description: doc.select(".description").text(),
        detail: doc.select(".author").text(),
        host: "https://docsach24.co"
    })
}