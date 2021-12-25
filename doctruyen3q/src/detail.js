function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html()
        return Response.success({
            name: doc.select("h1.title-manga").text(),
            cover: doc.select(".image-info img").first().attr('src'),
            author: doc.select(".author .detail-info").first().text(),
            description: doc.select(".detail-summary").text(),
            detail: 'Tình trạng : '+doc.select(".status .detail-info").text()+'<br>Nhóm dịch : '+doc.select(".translate-group .detail-info").text()+'<br>Tác giả : '+doc.select(".author .detail-info").text(),
            ongoing: doc.select(".status").first().text().indexOf("Đang cập nhật") != -1,
            host: "https://doctruyen3qz.com"
        });
    }
    return null
}