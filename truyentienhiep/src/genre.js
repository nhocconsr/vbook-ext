function execute() {
    let repsonse = fetch('https://truyentienhiep.net');
    if(repsonse.ok){
        let doc = repsonse.html();
        let el = doc.select(".highlights .tag-list a");
        let data = [];
        for (let i = 4; i < el.size() - 2; i++) {
            let e = el.get(i);
            data.push({
                title: e.text(),
                input: e.attr('href').split('/')[4],
                script: 'cat.js'
            });
        }
        return Response.success(data);
    }
    return null;
}