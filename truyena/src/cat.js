function execute(url, page) {
    let cat_id = url.split('/')[4];
    if (!page) page = '0';
    let response = fetch('https://truyena.net/index.php?cat='+cat_id+'&page='+page);
    if(response.ok){
        let doc = response.html()
        var next = doc.select('.pagination').select('li.active + li').text();
        const el = doc.select(".story-list .row")
        const data = [];
        el.forEach(e => data.push({
                name: e.select(".story-list-title").first().text(),
                link: e.select(".story-list-title a").first().attr("href"),
                cover: "https://truyena.net"+e.select(".imgThumb img").first().attr("src"),
                description: e.select("a[href~=tac-gia]").first().text(),
                host: "https://truyena.net"
            }));
        return Response.success(data, next)
    }
    return null;
}