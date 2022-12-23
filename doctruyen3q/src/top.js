function execute(sort, page) {
    load('config.js');
    if (!page) page = '1';
    let response = fetch(BASE_URL +'/tim-truyen',{
        method : "GET",
        headers: {
            'user-agent': UserAgent.android()
        },
        queries : {
            page : page,
            sort : sort
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
                host: BASE_URL
            })
        })
        return Response.success(data, next)
    }
    return null
}