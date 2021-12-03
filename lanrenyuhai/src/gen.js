load('libs.js');
function execute(url, page) {
    let host = 'https://www.lanrenyuhai.com';
    if(!page) page = '1';
    let response = fetch('https://www.lanrenyuhai.com/'+url+'-'+page+'.html');
    if (response.ok) {
        let doc = response.html('gbk');
        let next = doc.select("#pagelink").select("li.active + li").text();
        const data = [];
        doc.select(".content .bookbox").forEach(box => {
            let link = box.select("h4 a").first().attr('href');
            let m, id, cover;
            if ((m = link.match(/(\d+)/)) && m[0] && (id = m[0])) {
                cover = String.format('{0}/files/article/image/{1}/{2}/{3}s.jpg', host, Math.floor(id / 1000), id, id);
            }
            data.push({
                name: box.select("h4 a").first().text(),
                link: link,
                cover: cover || 'https://www.lanrenyuhai.com/modules/article/images/nocover.jpg',
                description: box.select(".author").first().text().replace('作者：',''),
                host: 'https://www.lanrenyuhai.com',
            })
        });
        return Response.success(data,next)
    }
    return null;
}