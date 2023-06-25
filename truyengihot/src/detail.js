load('config.js')
function execute(url) {
    var doc = fetch(url).html();
    return Response.success({
        name: doc.select("h2.cover-title").text(),
        cover: doc.select(".cover-image img").first().attr("src"),
        author: doc.select(".cover-artist a[href~=tac-gia]").text() || '^^!',
        description: doc.select(".product-synopsis-inner").first().text().replace(/ Xem thêm|Giới thiệu /gi,''),
        detail : doc.select(".cover-artist").first().text() + '<br>Trans : ' +doc.select(".groups-name").first().text(),
        ongoing: doc.select(".top-tags-full").attr('src').indexOf("ongoing") === -1,
        type: url.indexOf("tieu-thuyet") > 0 ? "novel" : "comic",
        host: BASE_URL
    });
}