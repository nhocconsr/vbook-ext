function execute(url) {
    let urlchap = fetch(url.replace('m.','www.')).html().select('.wright > div > a[href~=xiaoshuo]').first().attr('href');
    let response = fetch(urlchap);
    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];
        doc.select(".centent li a[title~=第]").forEach(e => {
            if(e.attr('href').indexOf('html') >= 0){
                let link = e.attr('href'); 
                data.push({
                    name: e.text(),
                    url: urlchap.replace('index.html','') + link,
                    host: "https://www.250sy.net"
                })
            }  
        });
        return Response.success(data);
    }
    return null;
}