function execute(url, page) {
    if (!page) page = '0';
    let response = fetch(url,{
        method : "GET",
        queries : {
            page : page
        }
    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select('.pagination').select('li.active + li').text();
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
        return Response.success(data, next)
    }
    return null
}