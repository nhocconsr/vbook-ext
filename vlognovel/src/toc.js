function execute(url) {
    let url_first_chap = fetch(url).html().select("nav.content-nav a:contains(Chương đầu)").first().attr("href");
    let response = fetch(url_first_chap);
    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select(".bottom-bar-list-chapter li a").forEach(e => {
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://vlognovel.com"
            })
        }); 
        return Response.success(data.reverse());
    }
    return null;
}