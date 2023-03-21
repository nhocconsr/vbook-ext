function execute(url) {
    let urlchap = fetch(url.replace('m.','www.')).html().select('.wright > div > a[href~=xiaoshuo]').first().attr('href');
    //https://www.250sy.net/xiaoshuo/0/2/index.html
    let url2 = urlchap.replace("index.html","")
    let response = fetch(urlchap);
    if (response.ok) {
        let doc = response.html('gbk');
        let el = doc.select(".centent li a");
        const data = [];
        for (let i = 4; i< el.size(); i++) {
            let e = el.get(i);
            data.push({
            name: e.select("a").text(),
            url: url2 + e.attr("href"),
            host: "https://www.250sy.net"
        });
        }

        return Response.success(data);
    }
    return null;
}