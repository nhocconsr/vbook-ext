function execute(url) {
    let nUrl = url.replace('m.','www.')
    let response = fetch(nUrl);
    if(response.ok){
        let doc = response.html();
        let el = doc.select(".chapter-list li a")
        let data = [];
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            data.push({
                name: e.attr("title"),
                url: e.attr("href"),
                host: "https://www.manhuagui.com"
            })
        }
        return Response.success(data);
    }
    return null;
}