function execute(key, page) {
    if (!page) page = '1';
    let response = fetch('https://doctruyen3qme.com/tim-truyen',{
        method : "GET",
        headers: {
                'user-agent': UserAgent.android()
        },
        queries : {
            keyword : key
        }
    });
    if(response.ok){
        let doc = response.html();
        let el = doc.select(".item-manga")
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select("h3 a").first().text(),
                link: e.select("h3 a").first().attr("href"),
                cover: e.select(".image-item img").attr("data-original") || e.select(".image-item img").attr("src"),
                description: e.select(".chapter-detail a").first().text(),
                host: "https://doctruyen3qme.com"
            })
        })
        return Response.success(data)
    }
    return null
}