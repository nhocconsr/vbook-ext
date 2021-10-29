function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select(".name h1").text(),
        cover: doc.select(".img-cover img").first().attr('data-src').replace('//','https://'),
        author: doc.select(".meta a[href~=author]").first().text(),
        description: doc.select(".section-body .content").text(),
        detail: 'Status : '+doc.select(".meta a[href~=status]").text()+'<br>Author : '+doc.select(".meta a[href~=author]").text(),
        ongoing: doc.select(".meta a[href~=status]").first().text().indexOf("Ongoing") != -1,
        host: "https://mangabuddy.com"
    });
}