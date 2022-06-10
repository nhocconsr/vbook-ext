function execute(url, page) {
    if (!page) page = '1';
    let response = fetch('https://www.manhuagui.com/list/'+url+'_p'+page+'.html');
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".pager").select("span.current + a").text()
        let el = doc.select("ul#contList li")
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            var linkImg = e.select("img").first().attr("src");
            if (!linkImg){
                linkImg = e.select("img").first().attr("data-src");
            }
            data.push({
                name: e.select(".ell a").first().text(),
                link: e.select(".ell a").first().attr("href"),
                cover: linkImg.replace('//','https://'),
                description: e.select(".tt").first().text().replace('更新至',''),
                host: "https://www.manhuagui.com"
            })
        }
        return Response.success(data, next)
    }
    return null;
}