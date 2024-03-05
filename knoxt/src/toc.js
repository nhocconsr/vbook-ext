function execute(url) {
    let respone = fetch(url)
    if(respone.ok){
        let doc = respone.html();
        let el = doc.select('.eplister ul li a')
        const data = [];
        el.forEach(e => {
            data.push({
                name: e.select('.epl-num').text() +' '+ e.select('.epl-title').text(),
                url: e.attr('href'),
                host: "https://knoxt.space"
            })
        });
        return Response.success(data.reverse())
    }
}