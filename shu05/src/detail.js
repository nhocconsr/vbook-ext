function execute(url) {
    const doc = Http.get(url+'/').html();

    return Response.success({
        name: doc.select("h1.bookTitle").text().split(' /')[0],
        cover: doc.select("img.img-thumbnail").first().attr("src"),
        author: doc.select("h1.bookTitle").text().split('/ ')[1],
        description: doc.select("#bookIntro").text(),
        detail: doc.select(".booktag span").html(),
        host: "http://www.shu05.com"
    });
}