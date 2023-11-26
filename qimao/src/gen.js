function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(`https://www.qimao.com/shuku/${url}-a-a-a-a-update_time-${page}/`)
    console.log(url)
    if(response.ok){
        let doc = response.html()
        let el = doc.select(".qm-pic-txt li")
        var next = parseInt(page) + 1
        const data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select(".s-tit a").text(),
                link: e.select(".s-tit a").attr("href"),
                cover: e.select("a img").attr("src"),
                description: e.select(".s-name").text().split(' ').shift(),
                host: "https://www.qimao.com"
            })
        }
        return Response.success(data,next.toString())
    }
}