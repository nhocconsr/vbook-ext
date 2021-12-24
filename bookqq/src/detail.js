function execute(url) {
    let bid = url.match(/\d+/)[0];
    let response = fetch('https://book.qq.com/book-detail/'+bid);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
        name: doc.select(".book-title").text(),
        cover: doc.select(".book-cover img").first().attr("src"),
        author: doc.select(".book-update .ypc-link").first().text(),
        description: doc.select(".intro").first().text(),
        detail: doc.select(".book-update .ypc-link").first().text()+doc.select(".book-update span").last().text()+'<br>'+doc.select(".copy-right").text(),
        ongoing: doc.select(".book-update").html().indexOf("连载") > 0,
        host: "https://book.qq.com",
    });
    }
}