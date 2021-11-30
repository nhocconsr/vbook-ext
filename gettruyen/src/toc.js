function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select("ul.list > li a").forEach(e => data.push({
            name: e.text(),
            url: url+'/'+e.attr("href"),
            host: "https://gettruyen.com"
        }));

        return Response.success(data);
    }
    return null;
}