function execute(url) {
    let response = fetch(url);
    if (response.ok){
        let doc = response.html();
        return Response.success({
            name: doc.select("h1").text(),
            cover: doc.select(".thumbook img").attr('src'),
            author: doc.select(".info-content a[href~=writer]").text(),
            description: doc.select(".entry-content p").html(),
            ongoing : doc.select('.info-content').text().indexOf('Ongoing') == -1 ? false : true,
            detail: doc.select(".info-content span").html(),
            host: "https://knoxt.space"
        });
    }  
}