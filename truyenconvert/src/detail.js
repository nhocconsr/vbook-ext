function execute(url) {
    let response = fetch(url);
    if (response.ok){
        let doc = response.html();
        return Response.success({
            name: doc.select(".detail-right h1").text(),
            cover: doc.select(".detail-thumbnail img").attr('src'),
            author: doc.select(".detail-info a[href~=tac-gia]").text(),
            description: doc.select(".summary p").text(),
            ongoing : doc.select('.fa-rss + span').text().indexOf('Đang ra') == -1 ? false : true,
            detail: 'Thể loại : '+doc.select(".fa-tags + a").first().text() + '<br>Update: '+doc.select("time").first().text(),
            host: "https://truyenconvert.net"
        });
    }  
}