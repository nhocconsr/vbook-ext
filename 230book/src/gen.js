function execute(url, page) {
    if(!page) page = '1';
    let response = fetch("https://www.230book.net/"+url+page+".html");
    if (response.ok) {
        let doc = response.html('gbk');
        let next = doc.select(".pagelink").select("strong + a").text();
        const data = [];
        doc.select(".l ul li").forEach(e => {
            let booKId = e.select(".s2 a").first().attr("href").split('/')[4];
            let fol = booKId.slice(0, -3);
            data.push({
                name: e.select(".s2 a").first().text(),
                link: e.select(".s2 a").first().attr("href"),
                cover: 'http://www.230book.net/files/article/image/'+fol+'/'+booKId+'/'+booKId+'s.jpg',
                description: e.select(".s5").text(),
                host: "http://www.230book.net"
            })
        });
        return Response.success(data,next)
    }
    return null;
}