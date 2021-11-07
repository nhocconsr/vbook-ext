function execute(url) {
    const doc = Http.get(url + '/').html();
    return Response.success({
        name: doc.select("h1.booktitle").text(),
        cover: doc.select("img.img-thumbnail").first().attr("src"),
        author: doc.select(".booktag a").first().text(),
        description: doc.select("hr ~ p").text(),
        detail: doc.select(".booktag a").first().text()+'<br>'+doc.select(".booktag span").last().text(),
        ongoing : doc.select(".booktag").html().indexOf("连载") != -1,
        host: "https://www.19358.net"
    });
}