function execute(url) {
    let nUrl = url.replace('m.','www.');
    let response = fetch(nUrl);
    if(response.ok){
        let doc = response.html();
        return Response.success({
            name: doc.select("h1").text(),
            cover: doc.select(".hcover img").first().attr('src').replace('//','https://'),
            description: doc.select("#intro-all").text(),
            detail: doc.select(".detail-list li").first().html(),
            category: doc.select(".detail-list li").get(1).html(),
            host: "https://www.manhuagui.com"
        });
    }
    return null;
}