function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select("ul.chapters li a");
    const data = [];
    el.forEach(e => {
        var title = e.attr('title')
        if(title){
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://truyen3s.com"
            })
        }
    });
    return Response.success(data);
}