load('config.js')
function execute(url) {
    var doc = fetch(url).html();
    return Response.success({
        name: doc.select("h2.cover-title").text(),
        cover: doc.select(".cover-image img").first().attr("data-src").replace('//','https://'),
        author: doc.select(".cover-artist a[href~=tac-gia]").text() || '^^!',
        description: "Xếp hạng: " + doc.select(".rated span").first().text() + '<br>' + "Chương mới nhất: " + doc.select('meta[itemprop="name"]').attr("content").replace(/ - TRUYENGIHOT - .+/, '').replace("Tới chap ","").replace("[",'').replace("]",'').replace(/^.+?-\s/, ''),
        detail : doc.select(".cover-artist").first().text() + '<br>' + 'Trans : ' +doc.select(".groups-name").first().text(),
        ongoing: doc.select(".top-tags-full").attr('src').indexOf("ongoing") === -1,
        type: url.indexOf("tieu-thuyet") > 0 ? "novel" : "comic",
        host: BASE_URL
    });
}