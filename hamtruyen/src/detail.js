function execute(url) {
    let response = fetch(url.replace('m.','www.'));
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("h3.story-name").first().text(),
            cover: doc.select(".story-avatar img").first().attr("src"),
            author: doc.select(".author span").first().text(),
            description: doc.select(".desc p").html(),
            detail: doc.select(".chap").first().text()+'<br>'+doc.select(".author").text(),
            ongoing: doc.select(".chap").text().indexOf("Đang") != -1,
            host: "https://hamtruyen.vn"
        });
    }
    return null;
}