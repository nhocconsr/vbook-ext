function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select("h1.book-title").first().html().split('<')[0],
        cover: doc.select(".book-cover img").first().attr("src"),
        author: doc.select(".novelist a[href~=user]").first().text(),
        description: doc.select(".about-txt-wrp").first().text(),
        detail: doc.select(".book-data span").first().text()+' 字数<br>'+doc.select(".book-last-update").text()+'<br>作者 : '+doc.select(".novelist a[href~=user]").text(),
        ongoing : doc.select(".book-data").html().indexOf("连载") != -1,
        host: "https://www.ciweimao.com",
    });
}