load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok){
        let doc = response.html();
        return Response.success({
            name: doc.select("h1.title").first().text(),
            cover: doc.select(".book img").first().attr('src'),
            author: doc.select(".info > div").get(0).text(),
            description: doc.select(".desc-text").text(),
            detail: doc.select(".info > div").get(0).text()+'<br>Trạng thái : '+doc.select(".info .label").text(),
            host: BASE_URL
        });
    }
    return null;
}