function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://m.ac.qq.com/category/listAll/type/'+url+'/rank/upt').params({
        page : page,
        pageSize : '15',
        style: 'items',
    }).html()
    if(doc){
        const el = doc.select(".comic-link")
        const data = [];
        el.forEach(e =>data.push({
                name: e.select(".comic-title").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                description: e.select(".comic-tag").first().text(),
                host: "https://m.ac.qq.com"
            })
        )
        var next = (parseInt(page) + 1).toString();
        if(el === '') var = null
        return Response.success(data,next)
    }
    return null;
}