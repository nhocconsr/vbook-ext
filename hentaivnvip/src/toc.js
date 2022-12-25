function execute(url) {
        load('config.js');
        url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
        var browser = Engine.newBrowser() // Khởi tạo browser
        browser.launch(url, 3000) // Mở trang web với timeout, trả về Document object
        var doc = browser.html() // Trả về Document object của trang web
        browser.close() // Đóng browser khi đã xử lý xong
        let el = doc.select(".chap-list a")
        let list = [];
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            list.push({
                name: e.select('span').first().text(),
                url: e.attr("href"),
                host: BASE_URL
            })
        }
        return Response.success(list);

}