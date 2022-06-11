function execute(url) {
    let res = url.split('/')[4]
    let post_id = JSON.parse(res.match(/(\d+)/)[1])
    let n = res.split(/(\d+)/)[0]
    let name = n.slice(0,-1)
    // let name = n.last()
    let response = fetch('https://docsach24.co/get-list-chapter-by-id', {
        method: "GET",
        queries: {
            'post_id' : post_id,
        }
    });
    if(response.ok){
        let doc = response.json()
        let allChap = doc.data
        let listChap = [];
        allChap.forEach(e =>listChap.push({
            name: e.title,
            url: 'https://docsach24.co/doc-sach/'+ name +'/'+ e.slug + '-'+ e.id + '.html',
            host: 'https://docsach24.co'
        }));
        return Response.success(listChap)
    }
    return null;
}