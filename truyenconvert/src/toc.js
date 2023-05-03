function execute(url) {
    let baseChapUrl = 'https://truyenconvert.net/doc-truyen/';
    let lchap = fetch(url).html().select('.list-chapter a').first().attr('href');
    let respone = fetch(lchap)
    if(respone.ok){
        let doc = respone.html()
        let el = doc.select('#getListChapter option')
        const data = [];
        el.forEach(e => {
            data.push({
                name: e.text(),
                url: baseChapUrl+e.attr('value'),
                host: "https://truyenconvert.net"
            })
        });
        return Response.success(data)
    }
    return null
}