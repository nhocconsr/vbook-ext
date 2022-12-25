function execute(key, page) {
    if (!page) page = 1;
    load('config.js');
    url = BASE_URL +'/tim-kiem?sort=-updated_at&filter%5Bname%5D='+key+'&filter%5Bstatus%5D=2%2C1&page='+page
    let response = fetch(url)
    if(response.ok){
        let doc = response.html();
        //let next = doc.select("ul.gap-2").select("li.bg-white").text();
        let el = doc.select(".w-full +.relative")
        let data = [];
        el.forEach(e => data.push({
            name: e.select(".p-2 > a ").text(),
            link: BASE_URL + e.select(".p-2 > a").attr("href"),
            cover: e.select(".cover").first().attr("style").split("'")[1],
            description: e.select("a.text-white").first().text(),
            host: BASE_URL
        }))
        return Response.success(data,(page+1).toString())
    }
    return null;
}