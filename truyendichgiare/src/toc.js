function execute(url) {
    let repsonse = fetch(url);
    if(repsonse.ok){
        let doc = repsonse.html();
        let lastChap = doc.select(".l-chapters").select('.chapter-text').get(0).text().split(' ')[1];
        const data = [];
        for(var v = 1; v <= lastChap ; v++){
            data.push({
                name: 'Chương ' + v,
                url: url + '/chuong-'+ v,
                host: "http://truyendichgiare.com"
            })
        }
        return Response.success(data);
    }
    return null;
}