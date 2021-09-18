function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select(".manga-info h3").text(),
        cover: doc.select(".info-cover img").first().attr('src'),
        author: doc.select(".manga-info a[href~=tac-gia]").first().text(),
        description: doc.select(".summary-content p").text(),
        detail: doc.select(".manga-info li").get(3).text() +'<br>'+doc.select(".manga-info li").get(1).text()+'<br>'+doc.select(".manga-info li").get(4).text(),
        ongoing : doc.select(".manga-info").html().indexOf("Đang tiến hành") != -1,
        //category: '',
        host: "https://vcomi.co"
    });
}