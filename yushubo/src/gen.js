function execute(url, page) {
    if (!page) page = '1';
    let response = fetch('https://www.yushugu.com/'+url,{
        method : "GET",
        queries : {
            page : page
        }
    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".pagination").select("li.active + li").text()
        let el = doc.select("ul.search-list li")
        let data = [];
        el.forEach(e => data.push({
            name: e.select("h3").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".author").first().text().replace('作者：',''),
            host: "https://www.yushugu.com"
        }))
        return Response.success(data, next)
    }
    return null;
}