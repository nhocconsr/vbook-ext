function execute(url) {
    let res = fetch(url).html();
    let truyen_id = res.select('#truyen-id').attr('value');
    let response = fetch('https://truyendich.com/api/chapter-list', {
        method: "GET",
        queries: {
            'truyen-id' : truyen_id,
        }
    });
    if(response.ok){
        let doc = response.html();
        let allChap = doc.select("li a")
        let listChap = [];
        allChap.forEach(e =>listChap.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://truyendich.com"
        }));
        return Response.success(listChap);
    }
    return null;
}