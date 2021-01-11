function execute(url) {
    var browser = Engine.newBrowser() // Khởi tạo browser
    browser.launch(url, 10000) // Mở trang web với timeout, trả về Document object
    var doc = browser.html() // Trả về Document object của trang web
    var el = doc.select("#chapcontent img");
    
    var data = [];
    for (var i = 1; i < el.size(); i++) {
        var e = el.get(i);
        data.push(e.attr("src"));
        
    }
    browser.close() // Đóng browser khi đã xử lý xong
    return Response.success(data);
}