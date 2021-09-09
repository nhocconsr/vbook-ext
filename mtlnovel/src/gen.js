function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://www.mtlnovel.com/'+url+'/').params({
        orderby : 'date',
        order : 'desc',
        status : 'all',
        pg: page
    }).html();
    if (doc){
        var next = doc.select("#pagination").select('span + a').text()
        const el = doc.select(".m-card .box")
        const data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select(".data-r a").first().text(),
                link: e.select(".data-r a").first().attr("href"),
                cover: e.select(".tmb-left amp-img").first().attr("src"),
                description: e.select(".views").first().text(),
                host: "https://www.mtlnovel.com"
            })
        }
        return Response.success(data, next)
    }
}