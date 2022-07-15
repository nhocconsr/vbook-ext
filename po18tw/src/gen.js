function execute(id, page) {
    if (!page) page = '1';
    var tk001 = fetch('https://www.po18.tw/findbooks/index').html().select('input[name=_po18rf-tk001]').attr('value');
    let response = fetch("https://www.po18.tw/findbooks/index", {
        "method": "POST",
        "body": {
            "_po18rf-tk001": tk001,
            "tag": "all",
            "words": "all",
            "status": id,
            "sort": "time",
            "new": "all",
            "tid": "",
            "page": page
        }
    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select('.page').first().select('a.current + a').text();
        let el = doc.select(".list-view .row")
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            var img = e.select(".view img").first().attr("src");
            if (img.startsWith("//")){
                img = img.replace('//','https://')
            }
            data.push({
                name: e.select("a.l_bookname").first().text(),
                link: e.select("a.l_bookname").first().attr("href"),
                cover: 'https://cdn0.po18.tw/bc/120/766456/O20220324104854.jpg',
                description: e.select("a.l_author").text(),
                host: "https://www.po18.tw"
            })
        }
        return Response.success(data, next)
    }
    return null;
}