function execute(url) {
    const doc = Http.get(url).html();

    return Response.success({
        name: doc.select("#info h1").text().split('/')[0],
        cover: doc.select(".pic img").first().attr("src"),
        author: doc.select(".author").first().text(),
        description: doc.select(".bookinfo_intro").text(),
        detail: doc.select("#info h1").text().split('/ ')[1]+'<br>'+doc.select(".booktag").html(),
        host: "https://www.69shu.io"
    });
}