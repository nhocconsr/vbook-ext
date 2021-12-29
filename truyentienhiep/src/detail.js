function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html()
        return Response.success({
            name: doc.select("h2").first().text(),
            cover: doc.select(".large-item img").first().attr("src"),
            author: doc.select(".author").first().text().replace('Tác Giả: ',''),
            description: doc.select(".book-description").first().text(),
            detail: doc.select(".author").first().text()+'<br>'+doc.select(".source").first().text(),
            ongoing: doc.select(".badge").text().indexOf("Còn tiếp") != -1,
            host: "https://truyentienhiep.net",
        });
    }
    return null
}