function execute(slug, page) {
    if (!page) page = '1';
    //http://www.23shu.com/type/man_0_0_allvisit_1.html
    let response = fetch('http://www.23shu.com/type/'+slug+'_0_0_allvisit_'+page+'.html');
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".pagination").select("a.current + a").text()
        let el = doc.select("#waterfall .item")
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select("h3 a").first().text(),
                link: e.select("h3 a").first().attr("href"),
                cover: e.select("img").first().attr("data-original"),
                description: e.select(".nickname").first().text().split(' /')[0],
                host: "http://www.23shu.com"
            })
        })
        return Response.success(data, next)
    }
    return null
}