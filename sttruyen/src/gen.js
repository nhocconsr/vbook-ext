function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url,{
        method : 'GET',
        queries: {
            page : page
        },
    });
    Console.log(response.headers)
    if(response.ok){
        let doc = response.html();
        let next = doc.select('.pagination').first().select('li.active + li').text();
        let el = doc.select(".list-group-item")
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            var img = e.select(".view img").first().attr("src");
            if (img.startsWith("//")){
                img = img.replace('//','https://')
            }
            data.push({
                name: e.select("h5").first().text(),
                link: e.select("a").first().attr("href"),
                cover: img,
                description: e.select("a[href~=author]").text(),
                host: "https://sttruyen.com"
            })
        }
        return Response.success(data, next)
    }
    return null;
}