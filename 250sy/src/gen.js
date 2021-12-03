function execute(url, page) {
    if(!page) page = '1';
    let response = fetch('https://www.250sy.net/'+url+'/'+page);
    if (response.ok) {
        let doc = response.html('gbk');
        let next = doc.select("#pagelink").select("strong + a").text();
        const data = [];
        doc.select(".bortable .col3list_area").forEach(box => {
            let link = box.select("h6 a").first().attr('href');
            data.push({
                name: box.select("h6 a").first().text(),
                link: link,
                cover: box.select(".col3list_bookface img").attr('src'),
                description: null,
                host: 'https://www.250sy.net',
            })
        });
        return Response.success(data,next)
    }
    return null;
}