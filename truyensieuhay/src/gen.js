function execute(id, page) {
    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (!page) page = '1';
    let response = fetch("https://truyensieuhay.com/danhsach/P"+page+"/index.html", {
        method: "GET",
        queries: {
            status : '0',
            sort: id
        }
    });
    if (response.ok) {
        let doc = response.html();
        let comicList = [];
        let next = doc.select(".pager").select('li.active + li').text()
        doc.select(".list_truyen_phuhop .item-tim-kiem").forEach(e => {
            comicList.push({
                name: e.select(".tentruyen").text(),
                link: e.select("a").attr("href"),
                cover: e.select("img").attr("src"),
                description : cap(e.select(".tenchap").text()),
                host: "https://truyensieuhay.com"
            });
        });
        return Response.success(comicList,next);
    }
    return null;
}