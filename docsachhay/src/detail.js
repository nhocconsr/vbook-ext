function execute(url) {
    let response = fetch(url);
    if (response.ok){
        let doc = response.html();
        return Response.success({
            name: doc.select("h1").text(),
            cover: doc.select(".cover img").attr('data-src'),
            author: doc.select(".author a").text(),
            description: doc.select(".summary .content").html(),
            ongoing : doc.select('.fa-rss + span').text().indexOf('Đang ra') == -1 ? false : true,
            detail: 'Tác giả : '+doc.select(".author a").first().text(),
            host: "https://docsachhay.net"
        });
    }  
}