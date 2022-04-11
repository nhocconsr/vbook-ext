function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url+'/page/'+page);
    if(response.ok){
        let doc = response.html();
        var next = doc.select('.z-pagination').select('span.current + a').text();
        const el = doc.select(".comics-grid .entry")
        const data = [];
        el.forEach(e =>data.push({
                name: e.select("a.name").first().text(),
                link: e.select("a.name").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                description: e.select(".date-time").first().text(),
                host: "https://hentaivnvip.com"
            })
        );
        return Response.success(data,next)
    }
    return null;
}