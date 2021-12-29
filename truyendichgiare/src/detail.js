function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html()
        return Response.success({
            name: doc.select(".col-info-desc div").get(1).text(),
            cover: doc.select(".book img").first().attr('src'),
            author: doc.select(".info a[href~=tac-gia]").text(),
            description: doc.select(".desc-text").text(),
            detail: 'Trạng thái : '+doc.select(".info div > span").text()+'<br>Tác giả : '+doc.select(".info a[href~=tac-gia]").text()+'<br>'+doc.select(".info div").get(2).text(),
            ongoing: doc.select(".info div > span").first().text().indexOf("Đang cập nhật") != -1,
            host: "http://truyendichgiare.com",
        });
    }
    return null
}