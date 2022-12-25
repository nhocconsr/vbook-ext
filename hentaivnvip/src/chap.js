function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var browser = Engine.newBrowser() // Khởi tạo browser
    browser.launch(url, 3000) // Mở trang web với timeout, trả về Document object
    var doc = browser.html() // Trả về Document object của trang web
    browser.close() // Đóng browser khi đã xử lý xong
    var el = doc.select(".chapter-content img");
    const imgs = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("src");
        if (img.includes("xyztruyen")){
            imgs.push(img)
        }
    }
    return Response.success(imgs);
}