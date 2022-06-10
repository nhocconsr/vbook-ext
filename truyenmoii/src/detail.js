function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select(".story-title").text(),
        cover: doc.select(".book img").attr('src'),
        description: doc.select(".desc-text").text(),
        detail: doc.select(".info").text(),
        host: "https://truyenmoii.com"
    })
}