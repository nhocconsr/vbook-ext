function execute(key, page) {
    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (!page) page = '1';
    let response = fetch("https://truyensieuhay.com/"+key+"/tim-kiem.html");
    if (response.ok) {
        let doc = response.html();
        let comicList = [];
        doc.select(".list_truyen_phuhop .item-tim-kiem").forEach(e => {
            comicList.push({
                name: e.select(".tentruyen").text(),
                link: e.select("a").attr("href"),
                cover: e.select("img").attr("src"),
                description : cap(e.select(".tenchap").text()),
                host: "https://truyensieuhay.com"
            });
        });
        return Response.success(comicList);
    }

    return null;
}