function execute(id, page) {
    if (!page) page = '0';
    let response = fetch('https://giangthe.com/tim-kiem-truyen',{
        method: "GET",
        queries: {
            page : page,
            category : id,
            sort : '3',
        }
    });
    if (response.ok) {
        let doc = response.html();
        let next = doc.select(".pagination").select("li.active + li").text()
        let novelList = doc.select(".booksearch").map(e => ({
            name: e.select(".searchbooktitle").text(),
            link: e.select("a").attr("href"),
            cover: e.select("img").attr("data-src"),
            description: e.select(".searchtag").first().text(),
            host: "https://giangthe.com"
        }));
        return Response.success(novelList, next);
    }
    return null;
}