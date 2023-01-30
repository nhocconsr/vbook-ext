function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.html();
        return Response.success({
            name: doc.select(".title h1").first().text(),
            cover: doc.select(".photo img").first().attr('src'),
            author: doc.select(".author").first().text() || 'Unknown',
            description: doc.select(".description").text(),
            detail: doc.select(".status").text()+'<br>'+doc.select(".author").text()+'<br>'+doc.select(".latest").text(),
            ongoing: doc.select(".status").first().text().indexOf("Đang") != -1,
            host: "https://goctruyentranhvui.com",
        });
    }
    return null;
}