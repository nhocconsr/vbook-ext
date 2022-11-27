function execute(key, page) {
    if (!page) page = 1;
    url = 'https://m.yushugu.com/search.html?ss='+key
    let browser = Engine.newBrowser();
    var doc = browser.launch(url, 4000)
    browser.close()
   
        //let next = doc.select("ul.gap-2").select("li.bg-white").text();
        let el = doc.select("ul > li")
        console.log(el)
        let data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("img").attr("alt"),
            link: 'https://www.yushugu.com' + e.select(".tit").attr("href"),
            cover: e.select("img").attr("src"),
            description: e.select(".intro").first().text(),
            host: "https://yushugu.com/"
        })
    }
        return Response.success(data)

}