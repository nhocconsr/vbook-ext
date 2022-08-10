function execute(url, page) {
    if (!page) page = '0';
    let response = fetch(url+'&page='+page);
    if(response.ok){
        let doc = response.html()
        var next = doc.select('.pagination').select('li.active + li').text();
        let el = doc.select(".story-list .row")
        let data = [];
        el.forEach(e => data.push({
                name: e.select(".story-list-title").first().text(),
                link: e.select(".story-list-title a").first().attr("href"),
                cover: 'https://truyena.net'+e.select(".imgThumb img").first().attr("src"),
                description: e.select("a[href~=tac-gia]").first().text(),
                host: "https://truyena.net"
            }));
        return Response.success(data, next)
    }
    return null;
}