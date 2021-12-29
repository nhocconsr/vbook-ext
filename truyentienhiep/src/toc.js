function execute(url) {
    let doc = fetch(url).html();
    let lastChap = doc.select(".chap-list .listing-meta a").first().attr('href').split('-').pop();
    let bookCode = url.split("https://truyentienhiep.net/doc-truyen-")[1];
    let response = fetch('https://truyentienhiep.net/Book/Pagination?bookCode='+bookCode+'&pageSize='+lastChap);
    if (response.ok) {
        let data = response.json();
        let allChap = data.items;
        const list = [];
        allChap.forEach(chap => {
            let name = chap.name
            if(!name) name = chap.code
            list.push({
                name: name,
                url: url +'/'+chap.code,
                host: "https://truyentienhiep.net"
            })
        })
        return Response.success(list);
    }
    return Response.success(bookCode);
}
