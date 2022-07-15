function execute(url, page) {
    if (!page) page = '1';
    let response = fetch('https://www.265xs.com/'+url+'/'+page+'.html');
    if(response.ok){
        let doc = response.html();
        let el
        let next = doc.select("#pagelink").select("strong + a").text().split(' ')[1];
        if(page === '1') el = doc.select(".l li")
        else el = doc.select(".novelslist2 li")
        const data = [];
        for (var i = 1; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select(".s2").first().text(),
                link: e.select(".s2 a").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                description: e.select(".s4").first().text(),
                host: "https://www.265xs.com"
            })
        };
        return Response.success(data,next)
    }
    return null;
}