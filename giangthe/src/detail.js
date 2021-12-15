function execute(url) {
    var doc = fetch(url).html();
    return Response.success({
        name: doc.select("#book_name2").text(),
        cover: doc.select("img.img-story").first().attr("src"),
        author: doc.select(".pt-5 .cap").last().text() || '^^!',
        description: doc.select(".bg-white .p-2 p").text(),
        detail : 'Tên gốc : '+doc.select("#oriname").text()+ '<br>Like : ' +doc.select("#whishlist").last().text() + '<br>Yêu cầu VIP : ' +doc.select("#follow_story").last().text(),
        ongoing : doc.select("#bookstatus").html().indexOf("Còn tiếp") != -1,
        host: "https://giangthe.com"
    });
}