function execute(url, page) {
    if (!page) page = null;
    let response = fetch('https://m.truyencv.vn/graphql', {
        method: "POST", // GET, POST, PUT, DELETE, PATCH
        body: JSON.stringify({
            id: url,
            query: "query truyenHotQuery(\n  $count: Int\n  $cursor: String\n) {\n  ...truyenHot_items_1G22uz\n}\n\nfragment truyenHot_items_1G22uz on Query {\n  bookRank(table: \"M\", first: $count, after: $cursor) {\n    edges {\n      node {\n        book {\n          title\n          refId\n          url\n          coverSm\n          numChapters\n          bookStatus\n          lastUpdate\n          id\n        }\n        id\n        rank\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            variables: {count: 20, cursor: page}
        })
    });
    if(response.ok){
        let json = response.json();
        let book = json.data.bookRank;
        let allItem = book.edges;
        if(book.pageInfo.hasNextPage){
            var next = book.pageInfo.endCursor
        }else{
            var next = null
        }
        let data = [];
        allItem.forEach(e =>{
            let item = e.node.book;
            data.push({
                name: item.title,
                link: item.url,
                cover: item.coverSm,
                description: "Chap "+item.numChapters,
                host: "https://m.truyencv.vn"
            });
        });
        return Response.success(data,next)
    }    
    return null;
}