function execute(url, page) {
    if (!page) page = null;
    let response = fetch('https://m.truyencv.vn/graphql', {
        method: "POST", // GET, POST, PUT, DELETE, PATCH
        body: JSON.stringify({
            id: url,
            query: "query truyenFullQuery {\n  ...truyenFull_items\n}\n\nfragment truyenFull_items on Query {\n  finishedBooks(num: 50, caching: true) {\n    edges {\n      node {\n        title\n        refId\n        url\n        coverSm\n        numChapters\n        bookStatus\n        lastUpdate\n        id\n      }\n    }\n  }\n}\n"
,
            variables: {count: 20, cursor: page}
        })
    });
    if(response.ok){
        let json = response.json();
        let book = json.data.finishedBooks;
        let allItem = book.edges;
        let data = [];
        allItem.forEach(e =>{
            let item = e.node;
            data.push({
                name: item.title,
                link: item.url,
                cover: item.coverSm,
                description: "Chap "+item.numChapters,
                host: "https://m.truyencv.vn"
            });
        });
        return Response.success(data)
    }
    return null;    
}