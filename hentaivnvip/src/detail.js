function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var browser = Engine.newBrowser() // Khởi tạo browser
    browser.launch(url, 3000) // Mở trang web với timeout, trả về Document object
    var doc = browser.html() // Trả về Document object của trang web
    browser.close() // Đóng browser khi đã xử lý xong
    return Response.success({
        name: doc.select("h1.name").first().text(),
        cover: doc.select(".book img").first().attr('src'),
        author: doc.select(".author").first().text() || 'Unknown',
        description: doc.select(".comic-description .inner").text(),
        detail: doc.select(".tsinfo .imptdt").first().text()+'<br>'+doc.select(".author").text(),
        ongoing: doc.select(".tsinfo .imptdt").first().text().indexOf("Đang") != -1,
        host: BASE_URL,
    });
}