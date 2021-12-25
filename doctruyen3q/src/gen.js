function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url,{
        method : "GET",
        queries : {
            page : page
        }
    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".pagination").select("li.active + li").text()
        let el = doc.select(".item-manga")
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select("h3 a").first().text(),
                link: e.select("h3 a").first().attr("href"),
                cover: e.select(".image-item img").attr("data-original") || e.select(".image-item img").attr("src"),
                description: e.select(".chapter-detail a").first().text(),
                host: "https://doctruyen3qz.com"
            })
        })
        return Response.success(data, next)
    }
    return null
}