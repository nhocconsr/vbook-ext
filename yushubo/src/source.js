
load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(BASE_URL + '/lists/'+ url, {
        method: "GET",
        queries: {
            start: page
        }
    });


    if(response.ok){
        let doc = response.html();
        let next = doc.select(".pagination").select("li.active + li").text()
        let el = doc.select(".books-list ul li")
        let data = [];
        el.forEach(e => data.push({
            name: e.select("a > .text").first().text(),
            link: e.select("a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".author").first().text().replace('作者：',''),
            host: BASE_URL
        }))
        return Response.success(data, next)
    }
    return null;
}