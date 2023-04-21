function execute(url) {
    const doc = fetch(url).html()
    return Response.success({
        name: doc.select("h1 a").text(),
        cover: doc.select(".img img").attr('src'),
        description: doc.select(".box-show-des").text(),
        detail: doc.select(".name-author").text(),
        host: "https://ztruyen.vn"
    });
}