function execute(url) {
    let response = fetch(url);
    if (response.ok){
        let doc = response.html();
        let lastc = doc.select("body > div.container > div > div.col-12.col-md-12.col-xl-9 > div:nth-child(2) > ul > li:nth-child(1) a").text().split('.')[0]
        let list = [];
        for (var i = 1; i <= lastc; i++) {
            list.push({
                name: "Chương " + i,
                url: url+'chuong-'+i +'/',
                host: "https://truyenvipfull.com"
            })
        }
        return Response.success(list);
    }
    return null;
}