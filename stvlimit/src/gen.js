function execute(url, page) {
    if (!page) page = '1';
    let reponse = fetch(url+'&p='+page)
    if(reponse.ok){
        let doc = reponse.html()
        let next = doc.select(".pagination").select("li.active + li").text()
        let el = doc.select("#searchviewdiv a.booksearch")
        let data = [];
        el.forEach(e => {
            let img = e.select("img").first().attr("src");
            if(img.startsWith('//')) img = img.replace('//','https://')
            data.push({
                name: e.select(".searchbooktitle").first().text(),
                link: e.select("a").first().attr("href"),
                cover: img || 'https://i.imgur.com/KP0Z6Eh.png',
                description: e.select(".searchtag").first().text(),
                host: "https://sangtacviet.xyz"
            })
        });
        return Response.success(data, next)
    }
    return null;
}