function execute(id, page) {
    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (!page) page = '1';
    let response = fetch("https://hamtruyen.vn/danhsach/P"+page+"/index.html", {
        method: "GET",
        queries: {
            o : id,
            st: '1'
        }
    });
    if (response.ok) {
        let doc = response.html();
        let comicList = [];
        let next = doc.select(".pagination").select('li.active + li').text()
        doc.select(".list-story .story-item").forEach(e => {
            comicList.push({
                name: e.select(".story-name").text(),
                link: e.select("a").attr("href"),
                cover: e.select("img").attr("src"),
                description : cap(e.select(".chap").text()),
                host: "https://hamtruyen.vn"
            });
        });

        return Response.success(comicList, next);
    }

    return null;
}