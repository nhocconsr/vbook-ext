function execute(key, page) {
    if (!page) page = '1';
    let response = fetch('http://truyentop1.com/'+key+'/P'+page+'/tim-kiem.html');
    if (response.ok) {
        let doc = response.html();
        let comicList = [];
        let next = doc.select("ul.pager").select("li.active + li").text();
        doc.select("ul.lst_story .story_item").forEach(e => {
            comicList.push({
                name: e.select("a.story_title").first().text().replace(/(^\w|\s\w|\D+)/g, m => m.toUpperCase()),
                link: e.select("a.story_title").first().attr("href"),
                cover: e.select("a.story_img").first().attr("style").split('"')[1],
                description: e.select("a.linkchap").text(),
                host: "http://truyentop1.com"
            })
        });
        return Response.success(comicList, next);
    }
    return null;
}