function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select("h1.title-detail").text(),
        cover: doc.select(".col-md-4 img").first().attr("src"),
        author: doc.select("div.row.mt-2 > div:nth-child(2)").first().text(),
        description: doc.select("div.detail-content.mt-4 > p").text(),
        detail: 'Thực hiện :' +doc.select("div.row.mt-2 > div:nth-child(8)").html()+ "<br>Nhóm dịch :" + doc.select("div.row.mt-2 > div:nth-child(10)").html(),
        category: doc.select("div.row.mt-2 > div:nth-child(6)").html(),
        host: "https://lxhentai.com"
    });
}