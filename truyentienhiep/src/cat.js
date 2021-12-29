function execute(url, page) {
    if (!page) page = '1';
    let response = fetch('https://truyentienhiep.net/Category/Pagination?categoryCode='+url+'&pageSize=20&pageNumber='+page);
    if(response.ok){
        let chapList = response.json().items;
        let list = [];
        chapList.forEach(chap =>{
            list.push({
                name: chap['name'],
                link: "doc-truyen-"+chap['code'],
                cover: chap['image'],
                description: chap['author'],
                host: "https://truyentienhiep.net"
            });
        });
        var next = parseInt(page) + 1;
        return Response.success(list, next.toString())
    }
    return null;
}