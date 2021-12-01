function execute(url, page) {
    if(!page) page = '1';
    let response = fetch('https://www.20xs.org/shuku/0_'+url+'_0_'+page+'.html');
    if (response.ok) {
        let doc = response.html();
        let next = doc.select("#pagelink").select("strong + a").text().split(' ')[1];
        const data = [];
        doc.select(".novelslist2 dl").forEach(e => data.push({
                name: e.select("h3 a").first().text(),
                link: e.select("h3 a").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                description: e.select(".book_other span").first().text(),
                host: "https://www.20xs.org"
            }));
        return Response.success(data,next)
    }
    return null;
}