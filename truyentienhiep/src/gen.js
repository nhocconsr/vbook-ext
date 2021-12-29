function execute(url, page) {
    if (!page) page = '1';
    let response = fetch('https://truyentienhiep.net/Group/Pagination',{
        method : "GET",
        queries : {
            groupCode : url,
            pageSize : '20',
            pageNumber : page
        }
    });
    if(response.ok){
        let data = response.json();
        let chapList = data.items;
        let list = [];
        chapList.forEach(chap =>{
            list.push({
                name: chap['name'],
                link: "doc-truyen-"+chap['code'],
                cover: chap['image'],
                description: chap['author'],
                host: "https://truyentienhiep.net"
            })
        })
        let next = parseInt(page) + 1;
        return Response.success(list, next.toString())
    }
    return null
}