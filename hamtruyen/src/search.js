function execute(key, page) {
    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (!page) page = '1';
    let response = fetch("https://hamtruyen.info/tim-kiem/"+key+"/index.html");
    if (response.ok) {
        let doc = response.html();
        let comicList = [];
        doc.select(".list-story .story-item").forEach(e => {
            comicList.push({
                name: e.select(".story-name").text(),
                link: e.select("a").attr("href"),
                cover: e.select("img").attr("src"),
                description : cap(e.select(".chap").text()),
                host: "https://hamtruyen.info"
            });
        });
        return Response.success(comicList);
    }

    return null;
}