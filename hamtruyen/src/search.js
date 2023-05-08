function execute(key, page) {
    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (!page) page = '1';
    let response = fetch("https://hamtruyen.info/tim-kiem/"+key+"/index.html");
    if (response.ok) {
        let doc = response.html();
        let comicList = [];
        doc.select(".lst_story .story_item").forEach(e => {
            comicList.push({
                name: e.select(".story_title").text(),
                link: e.select("a").attr("href"),
                cover: e.select(".story_img").attr('style').split(/[","]/)[1],
                description : cap(e.select(".linkchap").text()),
                host: "https://hamtruyen.info"
            });
        });
        return Response.success(comicList);
    }

    return null;
}