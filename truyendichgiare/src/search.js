function execute(key, page) {
    if (!page) page = '1';
    let response = fetch('http://truyendichgiare.com/search',{
        method : "GET",
        queries : {
            q : key
        }
    });
    if(response.ok){
        let doc = response.html();
        let el = doc.select(".col-truyen-main .list-truyen .row");
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select("h3.truyen-title").first().text(),
                link: e.select("h3.truyen-title a").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                description: e.select(".author").first().text(),
                host: "http://truyendichgiare.com"
            })
        })
        return Response.success(data)
    }
    return null
}