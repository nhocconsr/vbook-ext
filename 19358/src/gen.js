load('libs.js');
function execute(url, page) {
    let host = 'https://www.19358.net';
    if(!page) page = '1';
    let response = fetch('https://www.19358.net/list/'+url+'/'+page+'.html');
    if (response.ok) {
        let doc = response.html();
        let next = doc.select("#pagelink").select("li.active + li").text();
        let data = [];
        doc.select('.table tr').first().remove();
        doc.select(".table tr").forEach(box => {
            let link = box.select("a").first().attr('href');
            let m, id, cover;
            if ((m = link.match(/(\d+)/g)) && m[1] && (id = m[1])) {
                cover = String.format('https://img.dahexs.net/timthumb.php?src=image/{1}/{2}/{3}s.jpg&h=182&w=130', host, Math.floor(id / 1000), id, id);
            }
            data.push({
                name: box.select("a").first().text(),
                link: link,
                cover: cover || 'https://img.dahexs.net/novel/images/nocover.jpg',
                description: box.select(".text-muted").first().text().replace('作者：',''),
                host: 'https://www.19358.net',
            })
        });
        return Response.success(data,next)
    }
    return null;
}