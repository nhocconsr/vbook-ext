function execute() {
    let repsonse = fetch('https://truyendichgiare.com/danh-sach/truyen-moi');
    if(repsonse.ok){
        let doc = repsonse.html();
        let el = doc.select(".dropdown-menu a")
        let data = [];
        for (let i = 4; i < el.size() - 2; i++) {
            let e = el.get(i);
            data.push({
                title: e.text(),
                input: e.attr('href'),
                script: 'gen.js'
            });
        }
        return Response.success(data);
    }
    return null;
}