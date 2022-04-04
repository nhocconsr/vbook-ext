function execute() {
    const doc = Http.get("https://www.royalroad.com/fictions/search?advanced=true").html();
    const el = doc.select(".panel-body .row .col-sm-6");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var title = e.text()
        data.push({
        title: title,
           
        input: 'https://www.royalroad.com/fictions/search?tagsAdd='+title,
        script: 'ghen.js'
        });
    }
    return Response.success(data);
}