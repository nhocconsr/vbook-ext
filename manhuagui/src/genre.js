function execute() {
    let response = fetch("https://www.manhuagui.com");
    if(response.ok){
        let doc = response.html();
        let el = doc.select(".index-cont li a");
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
            title: e.text(),
            input: e.attr('href').split('/')[2]+"/index",
            script: 'gen.js'
            });
        }
        return Response.success(data);
    }
    return null;
}