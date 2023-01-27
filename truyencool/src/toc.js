function execute(url) {
    let response = fetch(url);
    if (response.ok){
        var doc = response.html();
        doc.select('.c-new-tag').remove();
        var el = doc.select(".version-chap li a");
        const listChap = [];
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            listChap.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://truyencool.net"
            })
        }
        return Response.success(listChap);
    }
    
}