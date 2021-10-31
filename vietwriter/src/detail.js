function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select("h1.p-title-value").first().text(),
        cover: doc.select("img.book-cover").first().attr('src'),
        author: doc.select(".message-fields dl[data-field='tacgia'] dd").first().text() || 'Unknown',
        description: doc.select(".bbWrapper").text().replace(/<\/?div.*>/g, ''),
        detail: 'Tình Trạng : '+doc.select(".message-fields dl[data-field='tinhtrang'] dd").text()+'<br>Tác giả : '+doc.select(".message-fields dl[data-field='tacgia'] dd").text()+'<br>Nguồn : '+doc.select(".message-fields dl[data-field='nguon'] dd").last().text(),
        ongoing: doc.select(".message-fields").first().text().indexOf("Đang") != -1,
        host: "https://vietwriter.vn",
    });
}