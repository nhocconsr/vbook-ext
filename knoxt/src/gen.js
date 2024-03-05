function execute(id, page) {
    if (!page) page = '1';
    let response = fetch('https://knoxt.space/series/',  {
        method: "GET",
        queries: {
            page : page,
            order : id
        }
    });
    if (response.ok){
        let doc = response.html();
        if(doc.select(".hpage:contains(Next)"))
            var next = (parseInt(page) + 1).toString();
        else
            var next = null;
        let el = doc.select(".listupd article")
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select(".ntitle").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select("img").attr("src"),
                description: e.select(".nchapter").first().text(),
                host: "https://knoxt.space"
            })
        }
        return Response.success(data,next)
    }
    return null;
}