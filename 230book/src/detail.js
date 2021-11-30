function execute(url) {
    let response = fetch(url.replace('m.','www.'));
    if (response.ok) {
        let doc = response.html('gbk');
        return Response.success({
            name: doc.select("#info h1").text(),
            cover: doc.select("#fmimg img").first().attr("src"),
            author: doc.select("#info p").first().text(),
            description: doc.select("#intro").text(),
            detail: doc.select("#info p").get(0).text()+'<br>'+doc.select("#info p").get(1).text(),
            host: "http://www.230book.net"
        });
    }
    return null;
}