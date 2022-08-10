function execute(url) {
    let response = fetch(url);
    if (response.ok){
        let doc = response.html();
        return Response.success({
            name: doc.select("h1").text(),
            cover: doc.select(".img img").attr('src'),
            author: doc.select(".name-author").first().text(),
            description: doc.select(".box-show-des").text(),
            detail: 'Tác giả : '+doc.select(".name-author").text() + '<br>Trạng thái : '+doc.select(".status-chapter").text(),
            host: "https://truyendichz.com"
        });
    }  
}