function execute(url, page) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    if (!page) page = '1';
    var browser = Engine.newBrowser() // Khởi tạo browser
    browser.launch(BASE_URL + url+'/page/'+page, 3000) // Mở trang web với timeout, trả về Document object
    var doc = browser.html() // Trả về Document object của trang web
    browser.close() // Đóng browser khi đã xử lý xong
    var next = doc.select('.z-pagination').select('span.current + a').text();
    const el = doc.select(".comics-grid .entry")
    const data = [];
        el.forEach(e =>data.push({
                name: e.select("a.name").first().text(),
                link: e.select("a.name").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                description: e.select(".date-time").first().text(),
                host: BASE_URL
            })
        );
        return Response.success(data,next)

}