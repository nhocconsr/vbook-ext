function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select(".font-weight-bold").text(),
        cover: doc.select(".bg-blur img").attr('src'),
        description: doc.select(".content-story").text(),
        detail: doc.select(".col-12 .text-left").text(),
        host: "https://ztruyen.vn"
    });
}