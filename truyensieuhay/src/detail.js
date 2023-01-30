function execute(url) {
    let response = fetch(url.replace('m.',''));
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select(".title").first().text(),
            cover: doc.select(".info_pic img").first().attr("src"),
            author: 'None',
            description: doc.select("#comic-description").html(),
            detail: doc.select(".row-detail").first().text()+'<br>'+doc.select(".author").text(),
            ongoing: doc.select(".contiep").text().indexOf("Đang") != -1,
            host: "https://truyensieuhay.com",
            type: url.indexOf("/truyen/") > 0 ? "novel" : "comic"
        });
    }
    return null;
}