function execute(url, page) {
    if (!page) page = '1';
    let response = fetch("https://www.po18.tw/tags", {
        method: "GET",
        queries: {
            page : page
        }
    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select('.page').first().select('a.current + a').text();
        let el = doc.select(".list-view .R_list")
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            var img = e.select(".book_cover  img").first().attr("src");
            if (img.startsWith("//")){
                img = img.replace('//','https://')
            }
            data.push({
                name: e.select(".book_name").first().text(),
                link: e.select(".book_name a").first().attr("href"),
                cover: img,
                description: e.select(".book_author").text(),
                host: "https://www.po18.tw"
            })
        }
        return Response.success(data, next)
    }
    return null;
}