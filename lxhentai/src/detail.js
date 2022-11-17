function execute(url) {
    let doc = fetch(url).html()
    return Response.success({
        name: doc.select(".mb-4 span").first().text(),
        cover: doc.select(".cover").first().attr("style").split("'")[1],
        author: doc.select(".grow a[href~=tac-gia]").first().text(),
        description: doc.select(".py-4 > p").text(),
        detail: 'Tác Giả :' +doc.select(".grow a[href~=tac-gia]").first().text(),
        host: "https://lxhentai.org"
    });
}