function execute(url) {
    const doc = Http.get(url).html();
    return Response.success({
        name: doc.select("h1.title").first().text(),
        cover: doc.select(".thumb img").first().attr('src'),
        author: doc.select(".author").first().text() || 'Unknown',
        description: doc.select(".description").html().replace(/<\/?div.*>/g, ''),
        detail: doc.select(".story_completed").text()+'<br>Tác giả : '+doc.select(".author").text()+'<br>'+doc.select(".infos p").last().text(),
        ongoing: doc.select(".story_completed").first().text().indexOf("Đang") != -1,
        host: "https://truyen3s.com",
    });
}