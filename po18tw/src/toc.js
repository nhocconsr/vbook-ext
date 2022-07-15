function execute(url) {
    let response = fetch('https://www.po18.tw/books/767828/articles').html();
    if(response.ok){
        let doc = response.html();
        // let el = doc.select(".chapter-list li a")
        // let data = [];
        // for (var i = el.size() - 1; i >= 0; i--) {
        //     var e = el.get(i);
        //     data.push({
        //         name: e.attr("title"),
        //         url: e.attr("href"),
        //         host: "https://www.manhuagui.com"
        //     })
        // }
        return Response.success(doc);
    }
    return Response.error(message);
}