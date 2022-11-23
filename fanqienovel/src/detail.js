function execute(url) {
        let response = fetch(url, {
        headers: {
            'user-agent': UserAgent.android()
        }
    });
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select(".info-name").first().text(),
            cover: doc.select(".page-header-img").first().attr("src").replace('//','https://'),
            author: doc.select(".info-author").first().text(),
            description: doc.select(".abstract-content-text").first().text(),
            detail: doc.select(".category-list").html(),
            host: "https://fanqienovel.com",
        });
    }
        return null;

}