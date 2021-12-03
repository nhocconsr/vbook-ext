function execute(url) {
    let response = fetch(url + '/');
    if (response.ok) {
        let doc = response.html('gbk');
        return Response.success({
            name: doc.select("h1.booktitle").text(),
            cover: doc.select(".bookcover img").first().attr("src"),
            author: doc.select(".booktag a").first().text(),
            description: doc.select(".bookintro").text(),
            detail: doc.select(".booktag a").first().text()+'<br>'+doc.select(".booktag span").last().text(),
            ongoing : doc.select(".booktag").html().indexOf("连载") != -1,
            host: "https://www.lanrenyuhai.com"
        });
    }
    return null;
}