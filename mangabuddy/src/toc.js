function execute(url) {
    let repsonse = fetch(url);
    if(repsonse.ok){
        let doc = repsonse.html();
        let el = doc.select(".chapter-list li a")
        let data = [];
        for (let i = el.length; i--;) {
            let e = el.get(i);
            data.push({
                name: e.select('.chapter-title').text(),
                url: e.attr("href"),
                host: "https://mangaforest.com"
            })
        }
        return Response.success(data);
    }
    return null;
}