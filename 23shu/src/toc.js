function execute(url) {
    let uid = url.match(/\d+/gm)[1];
    //http://www.23shu.com/novelsearch/novel/getdlist/?id=104969
    let repsonse = fetch('http://www.23shu.com/novelsearch/novel/getdlist/?id='+uid);
    if(repsonse.ok){
        let doc = repsonse.html();
        let el = doc.select("li a")
        let data = [];
        el.forEach(e => data.push({
                name: e.text(),
                url: e.attr("href"),
                host: "http://www.23shu.com"
            })
        )
        return Response.success(data);
    }
    return null;
}