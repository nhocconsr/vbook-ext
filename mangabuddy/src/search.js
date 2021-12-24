function execute(key, page) {
    if (!page) page = '1';
    let response = fetch('https://mangabuddy.com/search',{
        method : "GET",
        queries : {
            q : key,
            page : page
        }
    })
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".paginator").select("a.active + a").text()
        let el = doc.select(".list .book-detailed-item")
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select("h3 a").first().text(),
                link: e.select("h3 a").first().attr("href"),
                cover: e.select("img").first().attr("data-src"),
                description: e.select(".latest-chapter").first().text(),
                host: "https://mangabuddy.com"
            })
        })
        return Response.success(data, next)
    }
    return null
}