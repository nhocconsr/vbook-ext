function execute(url) {
    var doc = Http.get(url).html();
    var lastChap = doc.select(".chap-list .listing-meta a").first().attr('href').split('-').pop();
    var bookCode = url.split("https://truyentienhiep.net/doc-truyen-")[1];
    const json = Http.get('https://truyentienhiep.net/Book/Pagination?bookCode='+bookCode+'&pageSize='+lastChap).string();
    if (json) {
        var data = JSON.parse(json);
        var allChap = data.items;
        const list = [];
        for (var i = 0; i < allChap.length ; i++){
            var chap = allChap[i];
            list.push({
                name: chap['name'],
                url: url +'/'+chap['code'],
                host: "https://truyentienhiep.net"
            })
        }
        return Response.success(list);
    }
    return Response.success(bookCode);
}
