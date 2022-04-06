function execute(url, page) {
    if (!page) page = '1';
    let response = fetch('http://www.qiushubang.me/all/'+url+'_lastupdate_0_0_0_0_0_0_'+page+'.html')
    if(response.ok){
        let doc = response.html('gbk');
        var next = doc.select(".page").select("strong + a").text()
        const el = doc.select(".listRightBottom ul li")
        const data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("h2 a").first().text(),
                link: e.select("h2 a").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                description: e.select(".writer").first().text(),
                host: "https://www.qiushubang.me"
            })
        }
        return Response.success(data, next)
    }
    return null
}