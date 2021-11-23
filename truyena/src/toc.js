function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select("#section2 .story-chapter-list li a");
    const data = [];
    el.forEach(e => {
        var title = e.attr('title')
        if(title){
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://truyena.com"
            })
        }
    });
    return Response.success(data);
}