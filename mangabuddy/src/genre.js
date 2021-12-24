function execute() {
    const response = fetch("https://mangabuddy.com");
    if (response.ok){
        let doc = response.html();
        let el = doc.select(".genres__wrapper li a");
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