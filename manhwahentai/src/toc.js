function execute(url) {
    var response = fetch(url+'/ajax/chapters/', {
        method: "POST", // GET, POST, PUT, DELETE, PATCH
    })
    if (response.ok){
        let doc = response.html();
        doc.select('.c-new-tag').remove();
        var el = doc.select(".wp-manga-chapter a")
        const data = [];
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.attr("href"),
                host: "https://manhwahentai.me"
            })
        }
        return Response.success(data);
    }
    return null;
}